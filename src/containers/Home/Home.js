import React from "react";
import Header from "../../components/Header/Header";
import ImagesContainer from "../ImagesContainer/ImagesContainer";
import { images } from "../../helper/dummyData/imagesData";

class Home extends React.Component {
  state= {
    images: images
  }
  handleFilter = value => {
    console.log('Inside handleFilter with value: ', value);
    const auxImages = this.state.images.map(img => {
      img.keyWords.forEach(key => {
        console.log('key: ', key);
        let auxImg = {};
        if(key.includes(value)) {
          console.log('we are inside with img: ', img)
          auxImg = {...img};
        }
        if(auxImg) {
          return auxImg;
        } else {return};
    })});
    console.log('auxImages before setState: ', auxImages)
    this.setState({images: auxImages})

  }
  render() {
  return (
    <React.Fragment>
      <Header handleFilter={value => this.handleFilter(value)} />
      <ImagesContainer images={this.state.images} />
    </React.Fragment>
  );
}
};

export default Home;
