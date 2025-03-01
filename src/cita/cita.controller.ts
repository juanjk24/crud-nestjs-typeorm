import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CitaService } from './cita.service';

@Controller('cita')
export class CitaController {
    constructor(
        private readonly _citaService: CitaService,
    ) {}

    // crear cita
    @Post()
    async crearCita(@Body() cita: any) {
        return await this._citaService.crearCita(cita);
    }

    // obtener cita por su id
    @Get(':id')
    async obtenerCita(@Param('id', ParseIntPipe) id: number) {
        return await this._citaService.obtenerCita(id);
    }
}
