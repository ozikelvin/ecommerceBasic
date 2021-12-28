class StatusCodes{

    static OK = 200;
    static BAD = 400;
    static NOTFOUND = 404;
    static SERVERERROR = 500;

}

class StatusMessages{
    static sick_api = 'This API is not fine';
    static healthy_api = 'The API is fine';
    static  product_added = 'Successfully added a new product to stock';
    static product_add_fail = 'There was an error in adding a new product';
    static db_connect_success = 'Data base connected successfully';
    static db_connect_failure = 'Data base connection has failed';
    static upload_successful = 'Image uploaded successfully';
    static upload_fail = 'Something went wrong trying to upload image';
    static all_products = 'Successfully gotten all the products';
    static all_products_failed = 'There was an error in fetching all the products';
    static gotten_a_Product = 'Successfully got a product with its id';
    static gotten_product_failed = 'There was an Error in getting a product by by';
    static added_to_cart = 'Successfully added product to cart';
    static added_to_cart_failed = 'There was an error in adding product to cart';
    static cleared_cart = 'Successfully cleared cart';
    static err_clear_cart = 'Sorry could not clear Cart'


}

module.exports = {
    StatusCodes, StatusMessages
}