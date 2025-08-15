import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { map, Observable } from "rxjs";
import { ApiResponse } from "../interfaces";

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, ApiResponse<T>>{
    private getDefaultMessage(method : string) : string{
        switch (method){
            case 'GET' :
                return 'Lấy dữ liệu thành công';
            case 'POST' : 
                return 'Tạo mới thành công';
            case 'PATCH' :
                return 'Cập nhật thành công';
            case 'DELETE' :
                return 'Xóa thành công';
            default : 
                return 'Yêu cầu đã hoàn thành'
        }
    }
    intercept(context: ExecutionContext, next: CallHandler): Observable<ApiResponse<T>> {
        const request = context.switchToHttp().getRequest();
        return next
        .handle()
        .pipe(
            map((data) => {
                if(data && typeof data === 'object' && 'success' in data){
                    return data
                }
                let finalMessage = this.getDefaultMessage(request.method);
                if(data && typeof data === 'object' && 'message' in data){
                    finalMessage = data?.message
                    const {message, ...rest} = data
                    data = Object.keys(rest).length > 0 ? rest : undefined;

                }
                if(data && typeof data === 'object' && 'data' in data){
                    data = data.data as T;
                }
                return {
                    success: true,
                    message : finalMessage,
                    data,
                    date : new Date(),
                    path : request.url
                } 
            }
        )
        )
    }
}