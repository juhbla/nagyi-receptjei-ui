import Card from "../components/common/Card";

import hamburger from "../img/hamburger.jpg";

export function Home({ pageName }) {
  const contents = [
    {
      key: 1,
      value: `FEFOEJFOJFOEJFOEJFOEJFOPEFJOPEJFOPEJFPOEJPOEJFPOEJOPEJFPOEFOPEJFPOEJFPOEFPOEFOPEJFEPOFJEPOFJOPEJFEPOJFEPOFJOPFJEOPFJEPOFJEPOFOPEF`,
    },
  ];

  return (
    <>
      <div className="row">
        <div className="col-12">
          <h1>{pageName}</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <Card
            title="hamburger"
            imageSource={hamburger}
            imageAlt="hamburger"
            contents={contents}
          />
        </div>
        <div className="col-6">
          <Card
            title="hamburger"
            imageSource={hamburger}
            imageAlt="hamburger"
            contents={contents}
          />
        </div>
        <div className="col-6">
          <Card
            title="hamburger"
            imageSource={hamburger}
            imageAlt="hamburger"
            contents={contents}
          />
        </div>
        <div className="col-6">
          <Card
            title="hamburger"
            imageSource={hamburger}
            imageAlt="hamburger"
            contents={contents}
          />
        </div>
        <div className="col-6">
          <Card
            title="hamburger"
            imageSource={hamburger}
            imageAlt="hamburger"
            contents={contents}
          />
        </div>
        <div className="col-6">
          <Card
            title="hamburger"
            imageSource={hamburger}
            imageAlt="hamburger"
            contents={contents}
          />
        </div>
      </div>
    </>
  );
}
