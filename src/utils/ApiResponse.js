class ApiResponse{
    constructor(statusCode,
        message="something went wrong",){
            super(message)
            this.statusCode=statusCode
            this.data=null
            this.message=message
            this.success=statusCode<400
            

    }
}