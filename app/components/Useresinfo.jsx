import { useState } from "react";

// تلقائي (id) هذا المتغير سنستخدمه لإعطاء أي مستخدم جديد يتم إضافته رقم تعرفة
var nextId = 4;

// Useresinfo هنا قمنا بتعريف دالة تمثل مكوّن إسمه
function Useresinfo() {

    // عبارة عن مصفوفة من الكائنات initialUsers هنا قمنا بتعريف مصفوفة إسمها
    // مع الإشارة إلى أن كل كائن منهم يحتوي على المعلومات الخاصة بمستخدم واحد
    const initialUsers = [
        {id: 1, username: "Mhamad", isEditing: false},
        {id: 2, username: "Hala", isEditing: false},
        {id: 3, username: "Ayman", isEditing: false},
    ];

    // مما يعني initialUsers وضعنا فيه قيم المصفوفة users هنا قمنا بتعريف متغير إسمه
    // setUsers أنه عبارة عن مصفوفة و يمكن تحديث قيمها من خلال استدعاء دالة إسمها 
    const [users, setUsers] = useState(initialUsers);
    
    // قيمته الأولية نص فارغ newUsername هنا قمنا بتعريف متغير إسمه
    // setNewUsername و يمكن تحديث قيمته من خلال استدعاء دالة إسمها 
    // سنستخدم هذا المتغير بشكل مؤقت لتخزين إسم أي مستخدم جديد يتم إضافته 
    const [newUsername, setNewUsername] = useState("");

    // تستخدم لإضافة مستخدم جديد addNewUser هنا قمنا بتعريف دالة إسمها
    // مع إعطائه users فعلياً الدالة تقوم بإنشاء كائن جديد و إضافته في المصفوفة
    // nextId بشكل تلقائي نسبةً لآخر قيمة تم إضافتها في المتغير id قيمة للخاصية 
    // newUsername بالإضافة إلى إسم المستخدم المُدخل في الحقل المربوط بالمتغير  
    function addNewUser() {
        // هنا وضعنا شرط لمنع إضافة المستخدم إن لم يتم إعطاؤه إسم أولي
        if (newUsername.trim() == "") {
            alert("Please enter a username for the new user.");
            return;
        }
        // هنا قمنا بإضافة المستخدم مع إعطاؤه إسم المستخدم المُدخل في الحقل
        setUsers([
            ...users,
            {id: nextId++, username: newUsername},
        ]);
        // هنا قمنا بحذف إسم المستخدم المُدخل في الحقل بعد أن قمنا بإضافته للكائن
        setNewUsername("");
    }

    // تستخدم للسماح بتحديث معلومات مستخدم محدد editUser هنا قمنا بتعريف دالة إسمها
    // users فعلياً الدالة تقوم بالمرور على جميع الكائنات الموجودة في المصفوفة
    // هو الذي ستقف عنده و تحدث id الكائن الذي تجده يملك نفس قيمة البارميتر 
    // من أجل أن يصبح بالإمكان تعديل قيمه true فيه إلى isEditing قيمة الخاصية 
    function editUser(id) {
        setUsers(
            users.map((user) =>
                user.id === id ? {...user, isEditing: true} : user
            )
        );
    }

    // تستخدم لإيقاف السماح بتحديث معلومات المستخدم stopEditUser هنا قمنا بتعريف دالة إسمها
    // users فعلياً الدالة تقوم بالمرور على جميع الكائنات الموجودة في المصفوفة
    // هو الذي ستقف عنده و تحدث id الكائن الذي تجده يملك نفس قيمة البارميتر 
    // من أجل إخفاء حقل التعديل false فيه إلى isEditing جميع قيمه بالإضافة مع إعادة قيمة الخاصية 
    function stopEditUser(id) {
        setUsers(
            users.map((user) =>
                user.id === id ? {...user, isEditing: false} : user
            )
        );
    }

    // تستخدم لحذف مستخدم محدد deleteUser هنا قمنا بتعريف دالة إسمها
    // users فعلياً الدالة تقوم بالمرور على جميع الكائنات الموجودة في المصفوفة
    // هو الذي تقوم بحذفه منها id الكائن الذي تجده يملك نفس قيمة البارميتر 
    function deleteUser(id) {
        setUsers(users.filter((user) => user.id !== id));
    }

    // MyComponent هنا قمنا بتحضير ما سيتم عرضه عند تضمين المكوّن
    return (
        <>
            {/* هنا قمنا بعرض الحاوية التي تسمح بإضافة مستخدم جديد */}
            <div className="add-user-box">
                <input placeholder="Enter Username" value={newUsername} onChange={(e) => setNewUsername(e.target.value)} />
                <button onClick={() => addNewUser()}>Add New User</button>
            </div>

            {/* هنا قمنا بعرض قائمة فيها جميع المستخدمين */}
            <ul>
                {users.map((user) => (
                    <li key={user.id}>

                        {user.isEditing && (
                            <>
                                <input
                                    value={user.username}
                                    onChange={(e) =>
                                        setUsers(
                                            users.map((u) =>
                                                u.id === user.id ?{...u, username: e.target.value} : u
                                            )
                                        )
                                    }
                                />
                                <button onClick={() => stopEditUser(user.id)}>Stop Editing</button>
                                <button onClick={() => deleteUser(user.id)}>Delete</button>
                            </>
                        )}

                        {!user.isEditing && (
                            <>
                                <span>{user.username}</span>
                                <button onClick={() => editUser(user.id)}>Edit</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>

            {/* هنا قمنا بعرض إجمالي عدد المستخدمين */}
            <p>Total Users: {users.length}</p>
        </>
    );
}

export default Useresinfo;