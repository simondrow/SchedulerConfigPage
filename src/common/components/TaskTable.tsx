import React, { useState, useRef, useEffect } from 'react';
import './TaskTable.scss';

const TaskTable = () => {
  const days = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
  const [tasks, setTasks] = useState<Record<string, string[]>>({
    '星期日': ["8-9滴眼药水", "8-9练反转拍", "8-9朗读3篇范文", "9-10户外", "10-11读书90页", "11-12写一页字", "14-15写一篇作文", "15-16写日记", "16-17练琴", "17-18户外", "21点半抹油上床"],
    '星期一': ["8-9滴眼药水", "8-9练反转拍", "8-9朗读1篇英语背单词", "9-10户外", "10点半钢琴课", "11点半写一页字", "14-15读书90页", "15-16写日记", "17-18户外", "18点半-19阅读理解", "21点半抹油上床"],
    '星期二': ["8-9滴眼药水", "8-9练反转拍", "8-9背1篇范文", "9-10户外", "10-11读书90页", "11-12写一页字", "14-15练琴", "15-17奥数", "17-18户外", "18点半-19写日记","21点半抹油上床"],
    '星期三': ["8-9滴眼药水", "8-9练反转拍", "8-9朗读3篇范文", "9-10户外", "11-12写一页字", "14-15练琴", "15-16写日记", "16-17数学2页", "17-18户外", "21点半抹油上床"],
    '星期四': ["8-9滴眼药水", "8-9练反转拍", "8-9朗读1篇英语背单词", "9-10户外", "10-11钢琴课", "11点半-12写一页字", "14-15读书90页", "15-16写日记", "16-17语文基础", "17-18户外", "21点半抹油上床"],
    '星期五': ["8-9滴眼药水", "8-9练反转拍", "8-9朗读3篇范文", "9-10户外", "10-11读书90页", "11-12写一页字", "14-15练琴", "15-16写日记", "16-17数学2页", "17-18户外", "21点半抹油上床"],
    '星期六': ["8-9滴眼药水", "8-9练反转拍", "8-9朗读3篇范文", "9-10户外", "10-11读书90页", "11-12写一页字", "14-15练琴", "15-16写日记", "16-17语文基础", "17-18户外", "21点半抹油上床"],
  });
  const [editingDay, setEditingDay] = useState<string | null>(null);
  const [editValue, setEditValue] = useState<string>('');
  const editRef = useRef<HTMLTextAreaElement>(null);

  // 当进入编辑状态时，设置文本框的值并聚焦
  useEffect(() => {
    if (editingDay) {
      setEditValue(tasks[editingDay].join('\n'));
      setTimeout(() => {
        editRef.current?.focus();
      }, 0);
    }
  }, [editingDay]);

  // 处理单元格点击事件，进入编辑状态
  const handleCellClick = (day: string) => {
    setEditingDay(day);
  };

  // 处理失去焦点事件，保存修改
  const handleBlur = () => {
    if (editingDay) {
      const newTasks = { ...tasks };
      newTasks[editingDay] = editValue.split('\n').filter(task => task.trim() !== '');
      // 先保存任务，确保状态更新完成后再退出编辑状态
      setTasks(newTasks);
      // 使用setTimeout确保状态更新完成
      setTimeout(() => {
        setEditingDay(null);
        setEditValue('');
      }, 0);
    }
  };

  // 点击其他区域时，失去焦点
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (editingDay && editRef.current && !editRef.current.contains(event.target as Node)) {
        handleBlur();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [editingDay]);

  return (
    <div className="task-table-container">
      <h2>王莞尔每周任务</h2>
      <table className="task-table">
        <thead>
          <tr>
            {days.map(day => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {days.map(day => (
              <td key={day} className="task-cell">
                {editingDay === day ? (
                  <textarea
                    ref={editRef}
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    onBlur={handleBlur}
                    className="task-editor"
                  />
                ) : (
                  <div onClick={() => handleCellClick(day)} className="task-content">
                    <ul>
                      {tasks[day].map((task, index) => (
                        <li key={index}>{task}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TaskTable;