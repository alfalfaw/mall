import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateProductDTO {
    @ApiProperty({ example: '标题一', description: '视频标题' })
    @IsNotEmpty({ message: '请填写视频标题' })
    readonly id: number;
    @ApiProperty({ example: '标题一', description: '视频标题' })
    readonly name: string;
    @ApiProperty({ example: '标题一', description: '视频标题' })
    readonly sku: string;
    @ApiProperty({ example: '标题一', description: '视频标题' })
    readonly price: number;
}