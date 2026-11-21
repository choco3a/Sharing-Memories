'use client';

import { useState } from 'react';
import GroupCard from './components/GroupCard';
import type { Group } from './types/group';

export default function Home() {
  const [groups, setGroups] = useState<Group[]>([
    {
      id: 1,
      name: "北海道旅行",
      description: "旅行の思い出を共有"
    },
    {
      id: 2,
      name: "友人グループ",
      description: "みんなで行ったお店"
    },
    {
      id: 3,
      name: "思い出アルバム",
      description: "大切な場所と写真"
    }
  ]);

  const [groupName, setGroupName] = useState('');

  function addGroup() {
    const trimmedName = groupName.trim();

    if(trimmedName.trim() === ''){
      alert('グループ名を入力してください');
      return;
    }

    if(trimmedName.length > 15) {
      alert('グループ名は15文字で入力してください');
      return;
    };

    if(groups.some((group) => group.name === trimmedName)) {
      alert('同じ名前のグループがあります');
      setGroupName('');
      return;
    }

    const newGroup: Group = {
      id: Date.now(),
      name: trimmedName,
      description:'新しく作成されたグループ'
    }

    setGroups((prevGroups) =>[...prevGroups, newGroup]);

    setGroupName('');
  }

  function deleteGroup(id: number) {
    setGroups((prevGroups) => 
      prevGroups.filter((group) =>group.id !==id)
    );
  };


  return (
    <main>
      <h1>Sharing Memories</h1>
      <input 
        type='text'
        value={groupName}
        maxLength={15}
        onChange={(e) => {
          setGroupName(e.target.value)
        }}
        placeholder='グループ名を入力'
      />
      <button onClick={addGroup} >
        + グループを作成
      </button>

      {groups.map((group) => (
        <GroupCard
          key={group.id}
          group={group}
          onDelete={deleteGroup}
        />
      ))}
    </main>
  );
}

