// app/mensagem/page.tsx
interface MensagemProps {
  mensagem: number;
}

const Mensagem: React.FC<MensagemProps> = ({ mensagem }) => {
  return <div>Mensagem: {mensagem}</div>;
};

export default function MensagemPage() {
  return (
    <div>
      <Mensagem mensagem={10} />
    </div>
  );
}
