import FormularioAtualizar from "../FormularioAtualizar";
import style from "./Dialog.module.css";

const Dialog = ({ open, setOpen}) => {
    return (
        <dialog open={!!open} className={style.dialog}>
            <h1>Atualizar reserva</h1>
            <FormularioAtualizar setOpen={setOpen}/>
            <button type="button" onClick={() => setOpen(false)}>
                Fechar
            </button>
        </dialog>
    );
};

export default Dialog;
