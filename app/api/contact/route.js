import { writeFile, readFile } from 'fs/promises';
import { NextResponse } from 'next/server';
import path from 'path';
import * as XLSX from 'xlsx';

export async function POST(req) {
    try {
        const data = await req.json();
        
        // تحديد مسار الملف
        const filePath = path.join(process.cwd(), 'data', 'contacts.xlsx');
        
        // الحصول على التاريخ والوقت الحالي
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString('ar-EG');
        const formattedTime = currentDate.toLocaleTimeString('ar-EG');

        // إنشاء صف جديد من البيانات
        const newRow = {
            "التاريخ": formattedDate,
            "الوقت": formattedTime,
            "الاسم الأول": data.firstName,
            "الاسم الأخير": data.lastName,
            "البريد الإلكتروني": data.email,
            "رقم الهاتف": data.phone,
            "الرسالة": data.message
        };

        let workbook;
        let existingData = [];

        try {
            // محاولة قراءة الملف الحالي
            const buffer = await readFile(filePath);
            workbook = XLSX.read(buffer, { type: 'buffer' });
            
            // الحصول على الورقة الأولى أو إنشاء واحدة جديدة
            const sheetName = workbook.SheetNames[0] || 'Contacts';
            existingData = workbook.SheetNames.length > 0 
                ? XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]) 
                : [];
        } catch (error) {
            // إذا لم يكن الملف موجوداً، إنشاء ملف جديد
            workbook = XLSX.utils.book_new();
        }

        // إضافة البيانات الجديدة للمصفوفة الحالية
        existingData.push(newRow);

        // إنشاء ورقة عمل جديدة مع البيانات المحدثة
        const worksheet = XLSX.utils.json_to_sheet(existingData);

        // تعديل عرض الأعمدة
        const columnWidths = [
            { wch: 12 },  // التاريخ
            { wch: 10 },  // الوقت
            { wch: 15 },  // الاسم الأول
            { wch: 15 },  // الاسم الأخير
            { wch: 25 },  // البريد الإلكتروني
            { wch: 15 },  // رقم الهاتف
            { wch: 50 },  // الرسالة
        ];
        worksheet['!cols'] = columnWidths;

        // إذا كان المصنف لا يحتوي على أي أوراق، قم بإضافة ورقة جديدة
        if (!workbook.SheetNames.length) {
            XLSX.utils.book_append_sheet(workbook, worksheet, 'Contacts');
        } else {
            // استبدال الورقة الموجودة بالورقة المحدثة
            workbook.Sheets[workbook.SheetNames[0]] = worksheet;
        }

        // حفظ الملف
        const buffer = XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' });
        await writeFile(filePath, buffer);

        return NextResponse.json({ 
            message: 'تم حفظ البيانات بنجاح',
            timestamp: `${formattedDate} ${formattedTime}`
        }, { status: 200 });

    } catch (error) {
        console.error('Error saving data:', error);
        return NextResponse.json(
            { message: 'حدث خطأ أثناء حفظ البيانات' },
            { status: 500 }
        );
    }
}