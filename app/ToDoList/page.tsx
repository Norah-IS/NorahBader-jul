'use client';

import { useState, useEffect } from 'react';
// تم استبدال LayoutCheck بـ ClipboardCheck
import { Trash2, Plus, Check, ChevronDown, ChevronLeft, ClipboardCheck } from 'lucide-react';
interface Subtask {
    id: number;
    text: string;
    completed: boolean;
}

interface Task {
    id: number;
    text: string;
    completed: boolean;
    expanded: boolean;
    subtasks: Subtask[];
}

export default function TodoList() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        loadTasks();
    }, []);

    const loadTasks = async () => {
        try {
            if (typeof window !== 'undefined' && (window as any).storage) {
                const result = await (window as any).storage.get('todo-tasks');
                if (result && result.value) {
                    setTasks(JSON.parse(result.value));
                    setIsLoading(false);
                    return;
                }
            }
            const saved = localStorage.getItem('todo-tasks');
            if (saved) {
                setTasks(JSON.parse(saved));
            } else {
                const defaultTasks = [
                    {
                        id: 1,
                        text: 'تحليل متطلبات النظام',
                        completed: true,
                        expanded: true,
                        subtasks: [
                            { id: 11, text: 'دراسة واجهة المستخدم', completed: true },
                            { id: 12, text: 'تحديد هيكلة البيانات', completed: true }
                        ]
                    }
                ];
                setTasks(defaultTasks);
                await saveTasks(defaultTasks);
            }
        } catch (error) {
            console.log('Error loading tasks:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const saveTasks = async (tasksToSave: Task[]) => {
        try {
            if (typeof window !== 'undefined' && (window as any).storage) {
                await (window as any).storage.set('todo-tasks', JSON.stringify(tasksToSave));
            } else {
                localStorage.setItem('todo-tasks', JSON.stringify(tasksToSave));
            }
        } catch (error) {
            console.error('Error saving tasks:', error);
        }
    };

    const addTask = async () => {
        if (inputValue.trim()) {
            const newTasks = [{
                id: Date.now(),
                text: inputValue,
                completed: false,
                expanded: false,
                subtasks: []
            }, ...tasks];
            setTasks(newTasks);
            await saveTasks(newTasks);
            setInputValue('');
        }
    };

    const toggleTask = async (id: number) => {
        const newTasks = tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        );
        setTasks(newTasks);
        await saveTasks(newTasks);
    };

    const toggleSubtask = async (taskId: number, subtaskId: number) => {
        const newTasks = tasks.map(task =>
            task.id === taskId
                ? {
                    ...task,
                    subtasks: task.subtasks.map(subtask =>
                        subtask.id === subtaskId ? { ...subtask, completed: !subtask.completed } : subtask
                    )
                }
                : task
        );
        setTasks(newTasks);
        await saveTasks(newTasks);
    };

    const deleteTask = async (id: number) => {
        const newTasks = tasks.filter(task => task.id !== id);
        setTasks(newTasks);
        await saveTasks(newTasks);
    };

    const deleteSubtask = async (taskId: number, subtaskId: number) => {
        const newTasks = tasks.map(task =>
            task.id === taskId
                ? { ...task, subtasks: task.subtasks.filter(st => st.id !== subtaskId) }
                : task
        );
        setTasks(newTasks);
        await saveTasks(newTasks);
    };

    const addSubtask = async (taskId: number, text: string) => {
        if (!text.trim()) return;
        const newTasks = tasks.map(task =>
            task.id === taskId
                ? {
                    ...task,
                    subtasks: [...task.subtasks, { id: Date.now(), text, completed: false }]
                }
                : task
        );
        setTasks(newTasks);
        await saveTasks(newTasks);
    };

    const toggleExpanded = (id: number) => {
        setTasks(tasks.map(t => t.id === id ? { ...t, expanded: !t.expanded } : t));
    };

    const totalTasks = tasks.length + tasks.reduce((sum, task) => sum + task.subtasks.length, 0);
    const completedTasks = tasks.filter(t => t.completed).length +
        tasks.reduce((sum, task) => sum + task.subtasks.filter(st => st.completed).length, 0);
    
    const progressPercentage = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

    if (isLoading) {
        return (
            <div className="min-h-screen bg-[#FDFDFD] flex items-center justify-center font-sans" dir="rtl">
                <div className="animate-pulse text-zinc-400 font-medium">جاري التحميل...</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#F8F9FA] py-12 px-4 font-sans selection:bg-zinc-200" dir="rtl">
            <div className="max-w-full mx-auto">
                
                {/* Header Section */}
                <div className="mb-10 text-right">
                    <h1 className="text-4xl font-extrabold text-zinc-900 tracking-tight mb-2">
                        المهام <span className="text-zinc-400 font-light">اليومية</span>
                    </h1>
                    <div className="flex items-center gap-4">
                        <div className="flex-1 h-1.5 bg-zinc-200 rounded-full overflow-hidden">
                            <div 
                                className="h-full bg-zinc-900 transition-all duration-500 ease-out" 
                                style={{ width: `${progressPercentage}%` }}
                            />
                        </div>
                        <span className="text-sm font-medium text-zinc-500">{progressPercentage}% مكتمل</span>
                    </div>
                </div>

                {/* Input Card */}
                <div className="bg-white border border-zinc-200 rounded-2xl p-2 shadow-sm mb-8 transition-all focus-within:ring-2 focus-within:ring-zinc-900/5">
                    <div className="flex gap-2">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && addTask()}
                            placeholder="ما الذي تنوي إنجازه؟"
                            className="flex-1 px-5 py-3 bg-transparent outline-none text-zinc-800 placeholder:text-zinc-400"
                        />
                        <button
                            onClick={addTask}
                            className="bg-zinc-900 hover:bg-zinc-800 text-white px-6 py-3 rounded-xl font-medium transition-all active:scale-95 flex items-center gap-2"
                        >
                            <Plus size={18} />
                            <span>إضافة</span>
                        </button>
                    </div>
                </div>

                {/* Tasks List */}
                <div className="space-y-4">
                    {tasks.length === 0 ? (
                        <div className="text-center py-20 border-2 border-dashed border-zinc-200 rounded-3xl">
                            <ClipboardCheck size={48} className="mx-auto text-zinc-200 mb-4" />
                            <p className="text-zinc-500 font-medium">قائمة المهام فارغة حالياً</p>
                        </div>
                    ) : (
                        tasks.map(task => (
                            <div key={task.id} className="group bg-white border border-zinc-200 rounded-2xl overflow-hidden transition-all hover:border-zinc-300 hover:shadow-md">
                                {/* Main Task Item */}
                                <div className={`flex items-center gap-4 p-5 ${task.completed ? 'bg-zinc-50/50' : ''}`}>
                                    <button
                                        onClick={() => toggleTask(task.id)}
                                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                                            task.completed 
                                            ? 'bg-zinc-900 border-zinc-900' 
                                            : 'border-zinc-300 hover:border-zinc-900'
                                        }`}
                                    >
                                        {task.completed && <Check size={14} className="text-white" />}
                                    </button>

                                    <div className="flex-1 cursor-pointer" onClick={() => toggleExpanded(task.id)}>
                                        <h3 className={`text-base font-semibold transition-all ${
                                            task.completed ? 'text-zinc-400 line-through' : 'text-zinc-800'
                                        }`}>
                                            {task.text}
                                        </h3>
                                        {task.subtasks.length > 0 && (
                                            <p className="text-xs text-zinc-400 mt-0.5">
                                                {task.subtasks.filter(s => s.completed).length} من {task.subtasks.length} مهام فرعية
                                            </p>
                                        )}
                                    </div>

                                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button 
                                            onClick={() => toggleExpanded(task.id)}
                                            className="p-2 text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 rounded-lg transition-colors"
                                        >
                                            {task.expanded ? <ChevronDown size={18} /> : <ChevronLeft size={18} />}
                                        </button>
                                        <button 
                                            onClick={() => deleteTask(task.id)}
                                            className="p-2 text-zinc-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </div>

                                {/* Subtasks Area */}
                                {task.expanded && (
                                    <div className="bg-zinc-50/50 border-t border-zinc-100 p-5 space-y-3">
                                        <div className="flex gap-2 mb-4">
                                            <input 
                                                type="text" 
                                                placeholder="مهمة فرعية جديدة..."
                                                className="flex-1 bg-white border border-zinc-200 rounded-lg px-3 py-1.5 text-sm outline-none focus:border-zinc-900 transition-colors"
                                                onKeyDown={(e) => {
                                                    if (e.key === 'Enter') {
                                                        addSubtask(task.id, e.currentTarget.value);
                                                        e.currentTarget.value = '';
                                                    }
                                                }}
                                            />
                                        </div>
                                        
                                        <div className="space-y-2 pr-4 border-r-2 border-zinc-200">
                                            {task.subtasks.map(sub => (
                                                <div key={sub.id} className="flex items-center gap-3 group/sub">
                                                    <button
                                                        onClick={() => toggleSubtask(task.id, sub.id)}
                                                        className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${
                                                            sub.completed ? 'bg-zinc-500 border-zinc-500' : 'border-zinc-300'
                                                        }`}
                                                    >
                                                        {sub.completed && <Check size={10} className="text-white" />}
                                                    </button>
                                                    <span className={`text-sm flex-1 ${sub.completed ? 'text-zinc-400 line-through' : 'text-zinc-600'}`}>
                                                        {sub.text}
                                                    </span>
                                                    <button 
                                                        onClick={() => deleteSubtask(task.id, sub.id)}
                                                        className="opacity-0 group-hover/sub:opacity-100 p-1 text-zinc-400 hover:text-red-500"
                                                    >
                                                        <Trash2 size={14} />
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))
                    )}
                </div>

                {/* Footer Info */}
                <div className="mt-12 pt-6 border-t border-zinc-200 flex justify-between items-center text-zinc-400 text-xs">
                    <p>© 2024 نظام إدارة المهام الاحترافي</p>
                    <div className="flex gap-4">
                        <span>إجمالي المهام: {totalTasks}</span>
                        <span>المكتملة: {completedTasks}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}