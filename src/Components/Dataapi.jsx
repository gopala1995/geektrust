import React, { useState, useEffect } from "react";
import axios from "axios";
import "./container.css";
import { Checkbox } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { Editable } from "@chakra-ui/react";

export const Dataapi = () => {
  let [table, setTable] = useState([]);

  const fetchData = () => {
    axios
      .get(
        "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
      )
      .then((res) => setTable(res.data))
      .catch((err) => {
        return "err:", err;
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="head-div">
        <thead>
          <tr>
            <th className="head" scope="col">
              Name
            </th>
            <th className="head" scope="col">
              Email
            </th>
            <th className="role" scope="col">
              Role
            </th>
            <th className="action" scope="col">
              Action
            </th>
          </tr>
        </thead>
      </div>

      {table.map((el) => {
        return (
          <>
            <div className="container">
              <table class="table caption-top">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <Checkbox />
                    <td>{el.name}</td>
                    <td>{el.email}</td>
                    <td>{el.role}</td>
                    <Editable />
                    <Delete />
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        );
      })}
    </>
  );
};
