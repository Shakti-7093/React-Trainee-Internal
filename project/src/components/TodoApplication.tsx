import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { IUser } from "../app/Interface/todoInterface";

function TodoApplication() {

    // const dispatch = useDispatch();
    const { list, listStatus } = useSelector((state: RootState) => state.user);

    // useEffect(() => {
    //     dispatch();
    // })
    return (
        <main>
            <h1>Redux Toolkit Query</h1>
            <table>
                <tr>
                    <th>Sr. No.</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Website</th>
                </tr>
            </table>
            {
                list.map((user: IUser, index: number) => {
                    return (
                        <tr key={index}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.website}</td>
                        </tr>
                    )
                })
            }
        </main>
    )
}

export default TodoApplication;