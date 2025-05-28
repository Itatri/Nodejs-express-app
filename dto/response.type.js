// Khởi tạo class ResponseType : kiểu trả về khi gọi api
class ResponseType {
    constructor( data) {
        this.data = data;
    }

    success() {
       this.message = 'Success';
        this.code = 200;
        return this;
    }

    error() {
        this.message = 'Error';
        this.code = 404;
        return this;
    }
}

// Export class ResponseType : để sử dụng ở controller
module.exports = ResponseType;