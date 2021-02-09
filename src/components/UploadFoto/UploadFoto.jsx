import "./UploadFoto.css";
import React, { useEffect } from "react";
import { base } from "../../firebase";

const db = base.firestore();

function UploadFoto() {
  const [fileUrl, setFileUrl] = React.useState(null);
  const [users, setUsers] = React.useState([]);

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = base.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setFileUrl(await fileRef.getDownloadURL());
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    if (!username || !fileUrl) {
      return;
    }
    await db.collection("users").doc(username).set({
      name: username,
      avatar: fileUrl,
    });
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const usersCollection = await db.collection("users").get();
      setUsers(
        usersCollection.docs.map((doc) => {
          return doc.data();
        })
      );
    };
    fetchUsers();
  }, []);

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="file" onChange={onFileChange} />
        <input type="text" name="username" placeholder="NAME" />
        <button>Submit</button>
      </form>
      <ul className="catalogProduct">
        {users.map((user) => {
          return (
            <li key={user.name} className="catalogItems">
              <img
                width="350"
                height="480"
                src={user.avatar}
                alt={user.name}
                className="Item"
              />
              <p>{user.name}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default UploadFoto;
