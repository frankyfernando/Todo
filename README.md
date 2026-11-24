# Todo (React JS)

Aplikasi ini menggunakan array untuk menyimpan data dari task yang telah dibuat user.
Biar dapat merender ulang aplikasi jika terjadi perubahan data array yang telah dibuat, maka diperlukan useState

Di project ini menggunakan pasangan variabel todos dan setTodos. Todos digunakan untuk menyimpan data saat ini, sementara setTodos digunakan untuk memperbarui atau mengubah data tersebut ketika terjadi perubahan.

Fungsi untuk menambahkan Todo
const addTodo = (todo) => {
    setTodos([...todos, todo]);
};

Fungsi ini menggunakan setTodos untuk menambahkan data kedalam array. Untuk mmepertahankan data yang disimpan sebelumnya, maka digunakan [...todos]. [...todos] berguna untuk membuat salinan dari array todos yang disimpan sebelumnya, sementara todo disana merupakan data baru yang diterima.

Fungsi Menghapus todo
const removeTodos = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
}
Fungsi ini membuat array baru yang berisi salinan dari data array todos. Setelah membuat array baru tersebut, data terakhir dihapus dengan menggunakan splice. Setelah dihapus menggunakan splice, data array tersebut akan diupdate ke variabel array todos dengan menggunakan setTodos().

Fungsi Mengedit Todo
const editTodo = (index) => {
    inputTodo.current.value = todos[index];
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
}
Fungsi ini mirip dengan fungsi menghapus todo bedanya terdapat pada baris kedua yaitu inputTodo.current.value. inputTodo tersebut berasal dari elemen input. Biar dapat mengambil elemen input tersebut, diperlukan useRef(). Inti dari baris kedua tersebut adalah memberikan nilai ke dalam elemen input. Nilai tersebut isinya berupa nilai elemen array yang akan diedit.

props.todos.map((todo, index) => {
    return(
        <li key={index}>
          <input type="checkbox" className="checkbox"/>
          <p className="toDo">{todo}</p>
          <div className="buttonTodo">
            <button className="edit" onClick={() => props.editTodo(index)}>Edit</button>
            <button className="remove" onClick={() => props.removeTodos(index)}>Hapus</button>
          </div>
       </li>
Perintah tersebut digunakan untuk menampilkan task yang telah disimpan oleh array. Dengan menggunakan map, sistem dapat mengambil setiap elemen yang ada didalam untuk ditampilkan ke layar.
