import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { MedicoService } from './medico.service';

@Controller('medico')
export class MedicoController {
    constructor(
        private readonly _medicoService: MedicoService,
    ) {}

    // crear medico
    @Post()
    async crearMedico(@Body() medico: any) {
        return await this._medicoService.crearMedico(medico);
    }

    // obtener todos los medicos
    @Get()
    async obtenerMedicos() {
        return await this._medicoService.obtenerMedicos();
    }

    // actualizar medico
    @Put(':id')
    async actualizarMedico(@Body() medico: any, @Param('id', ParseIntPipe) id: number) {
        return await this._medicoService.actualizarMedico(id, medico);
    }

    // eliminar medico
    @Delete(':id')
    async eliminarMedico(@Param('id', ParseIntPipe) id: number) {
        return await this._medicoService.eliminarMedico(id);
    }
}
