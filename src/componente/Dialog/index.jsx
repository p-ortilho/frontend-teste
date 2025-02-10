import FormularioAtualizar from "../FormularioAtualizar";
import style from "./Dialog.module.css";

const Dialog = ({ open = false, setOpen }) => {
    return open ? (
        <dialog className={style.dialog} open>
            <h1>Atualizar reserva</h1>
            <FormularioAtualizar setOpen={setOpen}/>
            <button type="button" onClick={() => setOpen(false)}>
                Fechar
            </button>
        </dialog>
    ) : null;
};

export default Dialog;
