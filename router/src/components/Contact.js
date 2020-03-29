import React from "react";

const Contact = (props) => {
  console.log(props);
  setTimeout(() => {
    props.history.push('/about')
  }, 2000);
  return (
    <div className="container">
      <h4 className="center">Contact</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, corporis
        labore alias libero dolorem harum reprehenderit voluptate, excepturi
        deserunt, incidunt autem ipsum perferendis necessitatibus molestiae quod
        ab praesentium. Voluptate, voluptatibus.
      </p>
    </div>
  );
};

export default Contact;
