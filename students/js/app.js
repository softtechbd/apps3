// ছাত্রদের ডেটা
const students = [
    {
        "name": "রাহুল হাসান",
        "roll": "101",
        "registration": "2023001",
        "department": "কম্পিউটার",
        "image": "images/1.png",
        "mobile": "01711111111"
    },
    {
        "name": "সামিয়া ইসলাম",
        "roll": "102",
        "registration": "2023002",
        "department": "ইলেকট্রিক্যাল",
        "image": "images/2.png",
        "mobile": "01822222222"
    },
    {
        "name": "মাসুম বিল্লাহ",
        "roll": "103",
        "registration": "2023003",
        "department": "সিভিল",
        "image": "images/3.png",
        "mobile": "01933333333"
    },
    {
        "name": "নাহিদা পারভীন",
        "roll": "104",
        "registration": "2023004",
        "department": "মেকানিক্যাল",
        "image": "images/4.png",
        "mobile": "01644444444"
    },
    {
        "name": "সাজিদ রহমান",
        "roll": "105",
        "registration": "2023005",
        "department": "আর্কিটেকচার",
        "image": "images/5.png",
        "mobile": "01555555555"
    },
    {
        "name": "সাজিদ রহমান",
        "roll": "106",
        "registration": "2023005",
        "department": "আর্কিটেকচার",
        "image": "images/5.png",
        "mobile": "01555555555"
    },
    {
        "name": "সাজিদ রহমান",
        "roll": "107",
        "registration": "2023005",
        "department": "আর্কিটেকচার",
        "image": "images/5.png",
        "mobile": "01555555555"
    },
    {
        "name": "সাজিদ রহমান",
        "roll": "108",
        "registration": "2023005",
        "department": "আর্কিটেকচার",
        "image": "images/5.png",
        "mobile": "01555555555"
    },
    {
        "name": "সাজিদ রহমান",
        "roll": "109",
        "registration": "2023005",
        "department": "আর্কিটেকচার",
        "image": "images/5.png",
        "mobile": "01555555555"
    },
    {
        "name": "সাজিদ রহমান",
        "roll": "110",
        "registration": "2023005",
        "department": "আর্কিটেকচার",
        "image": "images/5.png",
        "mobile": "01555555555"
    },
    {
        "name": "সাজিদ রহমান",
        "roll": "111",
        "registration": "2023005",
        "department": "আর্কিটেকচার",
        "image": "images/5.png",
        "mobile": "01555555555"
    },
    {
        "name": "সাজিদ রহমান",
        "roll": "112",
        "registration": "2023005",
        "department": "আর্কিটেকচার",
        "image": "images/5.png",
        "mobile": "01555555555"
    },
    {
        "name": "সাজিদ রহমান",
        "roll": "113",
        "registration": "2023005",
        "department": "আর্কিটেকচার",
        "image": "images/5.png",
        "mobile": "01555555555"
    },
    {
        "name": "সাজিদ রহমান",
        "roll": "114",
        "registration": "2023005",
        "department": "আর্কিটেকচার",
        "image": "images/5.png",
        "mobile": "01555555555"
    },
    {
        "name": "সাজিদ রহমান",
        "roll": "115",
        "registration": "2023005",
        "department": "আর্কিটেকচার",
        "image": "images/5.png",
        "mobile": "01555555555"
    }
];

// ছাত্রদের তালিকা দেখানোর ফাংশন
function renderStudents(filter = '') {
    const list = document.getElementById('studentList');
    if (list) {
        list.innerHTML = '';
        students
            .filter(s =>
                s.name.toLowerCase().includes(filter.toLowerCase()) ||
                s.roll.includes(filter) ||
                s.registration.includes(filter) ||
                s.mobile.includes(filter)
            )
            .forEach(student => {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                    <img src="${student.image}" alt="Student" style="width:100px; height:100px; object-fit:cover; border-radius:50%;">
                    <h3>${student.name}</h3>
                    <p>রোল: ${student.roll}</p>
                `;
                card.onclick = () => {
                    localStorage.setItem('student', JSON.stringify(student));
                    window.location.href = 'details.html';
                };
                list.appendChild(card);
            });
    }
}

// ছাত্রের ডিটেইলস দেখানোর ফাংশন
function renderStudentDetails() {
    const student = JSON.parse(localStorage.getItem('student'));
    const container = document.getElementById('studentDetails');
    if (student && container) {
        container.innerHTML = `
            <img src="${student.image}" alt="Student">
            <h2>${student.name}</h2>
            <p><span>রোল:</span> ${student.roll}</p>
            <p><span>রেজিস্ট্রেশন:</span> ${student.registration}</p>
            <p><span>বিভাগ:</span> ${student.department}</p>
            <p><span>মোবাইল:</span> <a href="tel:${student.mobile}" class="call-button" target="_blank">📞 ${student.mobile}</a></p>

        `;
    }
}

// সার্চ ইনপুট হ্যান্ডেলিং
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', e => {
            renderStudents(e.target.value);
        });
    }

    // কোন পেজে আছি দেখে function কল
    if (document.getElementById('studentList')) {
        renderStudents();
    } else if (document.getElementById('studentDetails')) {
        renderStudentDetails();
    }
});
