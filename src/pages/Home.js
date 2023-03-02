import React from 'react';

const HomeStyle = {
  width: '70%',
  margin: 'auto',
  transform: 'translateY(120px)',
  textAlign: 'justify',
};
const HeaderStyle = {
  textAlign: 'center',
  margin: '20px',
  color: '#f5913e,',
};

const Home = () => (
  <>
    <main style={HomeStyle}>
      <header style={HeaderStyle}>
        <h2>Welcome to Our Page </h2>
      </header>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Vitae consectetur amet beatae. Porro, dignissimos,
        facere consequatur commodi autem laborum quibusdam aliquid
        officia consectetur nemo voluptates illo, pariatur necessitatibus
        veniam illum sapiente. Quibusdam velit cupiditate sit molestias,
        aliquid doloribus tenetur beatae, dicta a animi praesentium impedit
        excepturi aliquam? Dolor adipisci perspiciatis nobis voluptas
        praesentium magni rem nulla ipsa accusantium omnis velit illum
        nam qui reiciendis possimus, cupiditate officia illo vero! Provident.
      </p>
    </main>
  </>
);
export default Home;
