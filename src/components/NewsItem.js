import React, { Component } from "react";
import "../App.css";
import {Link} from 'react-router-dom';
export default class NewsItem extends Component {
 chuyenDoiURL=(str)=>
{
    // Chuyển hết sang chữ thường
    str = str.toLowerCase();     
 
    // xóa dấu
    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
    str = str.replace(/(đ)/g, 'd');
 
    // Xóa ký tự đặc biệt
    str = str.replace(/([^0-9a-z-\s])/g, '');
 
    // Xóa khoảng trắng thay bằng ký tự -
    str = str.replace(/(\s+)/g, '-');
 
    // xóa phần dự - ở đầu
    str = str.replace(/^-+/g, '');
 
    // xóa phần dư - ở cuối
    str = str.replace(/-+$/g, '');
 
    // return
    return str;
}
  render() {
    return (
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 mt-10">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <img src={this.props.linkAnh} className="img-fluid" alt='anh' />
            <hr className="my-2"/>
            <h3>{this.props.tieuDe}</h3>
            <p className="lead">
              <Link
                className="btn btn-primary btn-lg"
                to={`/news-detail/${this.chuyenDoiURL(this.props.tieuDe)}.${this.props.tinId}.html`}
              >
                Detail
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
