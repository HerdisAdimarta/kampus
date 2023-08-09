import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { CreateFakultasDto } from './dto/create-fakultas.dto';
import { UpdateFakultasDto } from './dto/update-fakultas.dto';
import { FakultasService } from './fakultas.service';

@Controller('fakultas')
export class FakultasController {
  constructor(private readonly fakultasService: FakultasService) {}

  // @HttpCode(HttpStatus.OK)
  // @Post('login')
  // signIn(@Body() signInDto: Record<string, any>) {
  //   return this.usersService.signIn(signInDto.username, signInDto.password);
  // }

  @Post()
  create(@Body() createFakultasDto: CreateFakultasDto) {
    return this.fakultasService.create(createFakultasDto);
  }

  @Get()
  findAll() {
    return this.fakultasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fakultasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateFakultasDto) {
    return this.fakultasService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fakultasService.remove(+id);
  }
}
