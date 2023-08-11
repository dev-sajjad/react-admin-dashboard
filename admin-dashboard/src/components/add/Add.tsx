import "./add.scss";
import { GridColDef } from "@mui/x-data-grid";

type Props = {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Add = ({ slug, columns, setOpen }: Props) => {
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        //add new item 
        // axios.post(`/api/${slug}s/add`, {})

    }; 

  return (
    <div className="add">
      <div className="modal">
        <span onClick={() => setOpen(false)} className="close">X</span>
        <h1>Add new {slug}</h1>
        <form onSubmit={handleSubmit}>
          {columns
            .filter((item) => item.field !== "id" && item.field !== "img")
            .map((column) => (
              <div className="item">
                <label>{column.headerName}</label>
                <input type={column.type} placeholder={column.field} />
              </div>
            ))}
            <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Add;
