import React, { useEffect, useState } from "react";
import { getData, searchData } from "../../firestore/firestore";
import {
    category,
    Food,
    MyCollection,
    MyWhere,
    Set,
} from "../../firestore/type";
import { useForm } from "react-hook-form";
import { addData } from "./../../firestore/firestore";
import "./style.css";
export const AddNewSet: React.FC = React.memo((): JSX.Element => {
    const [foods, setFood] = useState<Food[]>([]);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Set>();
    useEffect(() => {
        getData<Food>(MyCollection.FOOD)
            .then((res) => {
                setFood(res);
            })
            .catch(console.warn);
    }, []);
    const save = (data: Set) => {
        const x = foods.filter((elm) => elm.bool);
        if (x.length >= 2) {
            addData<Set>(MyCollection.SET, { ...data, foods: x })
                .then((res) => {
                    foods.map((elm) => (elm.bool = false));
                    setFood([...foods]);
                    reset();
                })
                .catch(console.warn);
        } else {
            alert("Choose minimum 2 Foods");
        }
    };
    return (
        <div>
            <h2>Add New Set</h2>
            <form onSubmit={handleSubmit(save)}>
                <div className="categ">
                    <div className="sets">
                        {foods.map((elm) => {
                            return (
                                <div key={elm.id} className="set">
                                    <h3>{elm.name}</h3>
                                    <p>Price - {elm.price}</p>
                                    <p>Description - {elm.description}</p>
                                    <p>Category - {elm.category}</p>
                                    <p>
                                        <input
                                            type="checkbox"
                                            onClick={() => {
                                                elm.bool = !elm.bool;
                                                setFood([...foods]);
                                            }}
                                        />
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                    <div className="radio">
                        <h2>Choose Category</h2>
                        {category.map((elm, i) => {
                            return (
                                <label key={i}>
                                    <input
                                        type="radio"
                                        name="e"
                                        value={elm}
                                        onChange={(e) => {
                                            searchData<Food>(
                                                MyCollection.FOOD,
                                                "category",
                                                MyWhere.EQUAL_TO,
                                                e.target.value
                                            )
                                                .then((res) => {
                                                    setFood(res);
                                                })
                                                .catch(console.warn);
                                        }}
                                    />
                                    {elm}
                                </label>
                            );
                        })}
                    </div>
                </div>
                <div className="addSet">

                <input
                    placeholder="Enter Set Name"
                    {...register("name", { required: "Ener Set Name!!" })}
                    />
                {errors.name && <p>{errors.name.message}</p>}
                <button >Add Set</button>
                    </div>
            </form>
        </div>
    );
});
