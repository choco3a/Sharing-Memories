import type {Group} from '../types/group';

type GroupCardProps = {
  group: Group;
  onDelete: (id: number) => void;
};

function GroupCard({ group, onDelete }: GroupCardProps) {
  return (
    <div>
      <h2>{group.name}</h2>
      <p>{group.description}</p>

      <button onClick={() => onDelete(group.id)}>
        削除
      </button>
    </div>
  );
};

export default GroupCard;