import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Food, MyCollection, category } from "../../firestore/type";
import { addData } from "./../../firestore/firestore";
import "./style.css";
export const AddNewFood: React.FC = React.memo((): JSX.Element => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Food>();
    const save = (data: Food) => {
        addData<Food>(MyCollection.FOOD, { ...data, bool: false })
            .then(console.log)
            .catch(console.warn);
        reset();
    };
    return (
        <div>
            <h3>Add New Food</h3>
            <form onSubmit={handleSubmit(save)}>
                <div className="inps">
                    <input
                        placeholder="Food Name"
                        {...register("name", { required: "Enter Food Name" })}
                    />
                    {errors.name && <p>{errors.name.message}</p>}
                    <input
                        placeholder="Price"
                        {...register("price", {
                            required: "Enter Food Price",
                            pattern: {
                                value: /^\d+$/,
                                message: "Enter Price!!!",
                            },
                        })}
                    />
                    {errors.price && <p>{errors.price.message}</p>}
                    <input
                        placeholder="Description"
                        {...register("description", {
                            required: "Enter Food Description",
                        })}
                    />
                    {errors.description && <p>{errors.description.message}</p>}
                    <select
                        {...register("category", {
                            required: "Choose Category",
                        })}
                    >
                        <option value="" hidden>
                            Choose Category
                        </option>
                        {category.map((elm, i) => {
                            return <option key={i}>{elm}</option>;
                        })}
                    </select>
                    {errors.category && <p>{errors.category.message}</p>}

                    <button>Add Food</button>
                </div>
            </form>
        </div>
    );
});
