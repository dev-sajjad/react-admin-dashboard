// import { useMutation, useQueryClient } from "@tanstack/react-query";
import "./add.scss";
import { GridColDef } from "@mui/x-data-grid";

type Props = {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Add = ({ slug, columns, setOpen }: Props) => {

  // const queryClient = useQueryClient();
  // const mutation = useMutation({
  //   mutationFn: () => {
  //     return fetch(`http://localhost:5000/api/${slug}s`, {
  //       method: 'POST',
  //       headers: {
  //         Accept: 'application/json',
  //         "content-type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         id: 111,
  //         img: "",
  //         lastName: "Hello",
  //         firstName: "Test",
  //         email: "test@example.com",
  //         phone: '123 456 789',
  //         createdAt: "01.07.2023",
  //         verified: true,
  //       })
  //     })
  //   }, 
  //   onSuccess: () => {
  //     queryClient.invalidateQueries([`all${slug}s`])
  //   }
  // })
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

      // mutation.mutate();
      setOpen(false);
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
