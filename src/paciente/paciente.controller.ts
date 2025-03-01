import { Controller, Post, Body, Get, Delete, ParseIntPipe, Param } from '@nestjs/common';
import { PacienteService } from './paciente.service';

@Controller('paciente')
export class PacienteController {
    constructor(
        private readonly _pacienteService: PacienteService,
    ) {}

    // crear paciente
    @Post()
    async crearPaciente(@Body() paciente: any) {
        return await this._pacienteService.crearPaciente(paciente);
    }

    // obtener todos los pacientes
    @Get()
    async obtenerPacientes() {
        return await this._pacienteService.obtenerPacientes();
    }

    // eliminar paciente
    @Delete(':id')
    async eliminarPaciente(@Param('id', ParseIntPipe) id: number) {
        return await this._pacienteService.eliminarPaciente(id);
    }
}
