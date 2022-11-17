import { Outlet } from "react-router-dom";
import React from "react";
import Directory from "../directory/directory";


const Data = () =>{
const categories =  [
        {
          "id": 1,
          "name": "Leanne Graham",
          "username": "Bret",
          "email": "Sincere@april.biz",
          "address":"Gwenborough - Kulas Light",
          "phone": "1-770-736-8031 x56442",
        },
        {
          "id": 2,
          "name": "Ervin Howell",
          "username": "Antonette",
          "email": "Shanna@melissa.tv",
          "address":"Wisokyburgh - Victor Plains",
          "phone": "010-692-6593 x09125",
        },
        {
          "id": 3,
          "name": "Clementine Bauch",
          "username": "Samantha",
          "email": "Nathan@yesenia.net",
          "address": "McKenziehaven - Douglas Extension",
          "phone": "1-463-123-4447",
        },
        {
          "id": 4,
          "name": "Patricia Lebsack",
          "username": "Karianne",
          "email": "Julianne.OConner@kory.org",
          "address": "South Elvis - Hoeger Mall",
          "phone": "493-170-9623 x156",
        },
        {
          "id": 5,
          "name": "Chelsey Dietrich",
          "username": "Kamren",
          "email": "Lucio_Hettinger@annie.ca",
          "address":"Roscoeview - Skiles Walks",
          "phone": "(254)954-1289",
        },
        {
          "id": 6,
          "name": "Mrs. Dennis Schulist",
          "username": "Leopoldo_Corkery",
          "email": "Karley_Dach@jasper.info",
          "address":"South Christy - Norberto Crossing",
          "phone": "1-477-935-8478 x6430",
        },
        {
          "id": 7,
          "name": "Kurtis Weissnat",
          "username": "Elwyn.Skiles",
          "email": "Telly.Hoeger@billy.biz",
          "address": "Howemouth - Rex Trail",
          "phone": "210.067.6132",
        },
        {
          "id": 8,
          "name": "Nicholas Runolfsdottir V",
          "username": "Maxime_Nienow",
          "email": "Sherwood@rosamond.me",
          "address":"Aliyaview - Ellsworth Summit",
          "phone": "586.493.6943 x140",
        },
        {
          "id": 9,
          "name": "Glenna Reichert",
          "username": "Delphine",
          "email": "Chaim_McDermott@dana.io",
          "address":"Bartholomebury - Dayna Park",
          "phone": "(775)976-6794 x41206",
        },
        {
          "id": 10,
          "name": "Clementina DuBuque",
          "username": "Moriah.Stanton",
          "email": "Rey.Padberg@karina.biz",
          "address":"Lebsackbury - Kattie Turnpike",
          "phone": "024-648-3804",
        }
      ]

      return (
        <div>
            <Directory categories={categories} />
            <Outlet/>
        </div>
      )
}

export default Data