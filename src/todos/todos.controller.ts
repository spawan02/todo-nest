import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { TodosService } from "./todos.service";
import { CreateTodoDto } from "./dto/create-todo.dto";
import { UpdateTodoDto } from "./dto/update-todo.dto";


@Controller("todos")
export class TodosController {
    constructor(private readonly todosService: TodosService){}
    @Get()
    findAll(){
        return this.todosService.findAll()
    }
    @Get(':id')
    findOne(@Param("id") id: string){
        return this.todosService.findOne(+id)
    }
    @Post()
    create(@Body() dto: CreateTodoDto){
        return this.todosService.create(dto)
    }
    @Put(":id")
    update(@Param('id') id:string, @Body() dto: UpdateTodoDto){
        return this.todosService.update(+id, dto)
    }
    @Delete(":id")
    remove(@Param('id') id: string){
        this.todosService.remove(+id)
        return {message: 'Todo deleted successfully'}
    }
}