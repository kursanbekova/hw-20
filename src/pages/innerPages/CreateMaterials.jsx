import { useDispatch } from "react-redux";
import { Form } from "../../components/UI/Form";
import { AppTitle } from "../../components/UI/Title";
import { useNavigate } from "react-router-dom";

export const CreateMaterials = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onCreateHandler = (data) => {
    const updateData = { ...data, id: Math.floor(Math.random() * 1000) };
    dispatch({ type: "CREATE", payload: updateData });
    navigate(-1);
  };
  return (
    <div>
      <AppTitle>CreateMaterials</AppTitle>
      <Form onSubmit={onCreateHandler} />
    </div>
  );
};
