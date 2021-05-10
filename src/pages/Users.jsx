import React from "react";
import { Table, Tag, Space } from "antd";
import { UserCard } from "../component/userCard";
import { useState } from "react";

const Users = () => {
  const handleDelete = (key) => {
    const newData = data.filter((item) => item.key !== key);
    setData(newData);
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (tags) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Action",
      key: "Action",
      render: (data) => {
        return (
          <Space size="middle">
            <a>Invite {data.name}</a>
            <a
              onClick={() => {
                handleDelete(data.key);
              }}
            >
              Delete
            </a>
          </Space>
        );
      },
    },
  ];

  const [data, setData] = useState([
    {
      key: "1",
      name: "Oliver Jake",
      age: 41,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },

    {
      key: "2",
      name: "Noah James",
      age: 26,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
    {
      key: "3",
      name: "Liam John",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "4",
      name: "Mason Robert",
      age: 35,
      address: "New York No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "5",
      name: "Harry Callum",
      age: 34,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "6",
      name: "Jack Connor",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "7",
      name: "Robert Noah",
      age: 22,
      address: "London No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "8",
      name: "James Connor",
      age: 32,
      address: "Houston No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
  ]);

  return (
    <div>
      <Table className="ant-table1" columns={columns} dataSource={data} />
      <div className="users-usercard">
        {data.map((item) => {
          return <UserCard title={item.name} />;
        })}
      </div>
    </div>
  );
};

export default Users;
