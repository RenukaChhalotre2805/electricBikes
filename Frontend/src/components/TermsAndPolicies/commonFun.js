export let listItems = [];
export function commonFun(data) {
  listItems = data.map((dataSet) => (
    <div>
      <p style={{ fontSize: "1.3rem", textAlign: "left" }} key={dataSet.header}>
        <b>
          {dataSet.index} {dataSet.header}
        </b>
      </p>
      <p
        style={{ fontSize: "1.3rem", textAlign: "left" }}
        key={dataSet.content}
      >
        {dataSet.content}
      </p>
      <br />
    </div>
  ));
}
