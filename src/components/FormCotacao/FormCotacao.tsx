import React, { FC, useState } from "react";
import Carro from "../../assets/icons/carro.svg";
import "./FormCotacao.scss";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { listCars } from "../../config/listaCars";

interface FormCotacaoProps {}

const FormCotacao: FC<FormCotacaoProps> = () => {
  const [car, setCar] = useState<number | null>(null);

  return (
    <div className="FormCotacao" data-testid="FormCotacao">
      <div className={"solicitar"}>
        <img src={Carro} alt="foto de carro" />
        <h1>Solicitar cotação</h1>
      </div>

      <div className={"containerForm"}>
        <form className={"form"}>
          <TextField id="standard-basic" label="Nome" variant="standard" />
          <TextField id="standard-basic" label="E-mail" variant="standard" />
          <TextField id="standard-basic" label="Telefone" variant="standard" />
          <FormControl variant="standard">
            <InputLabel id="demo-simple-select-standard-label">
              Modelo
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={car}
              onChange={(event: any) => setCar(event.target.value)}
              label="Age"
              color="primary"
            >
              {listCars?.map((car: any, key: number) => (
                <MenuItem value={car?.id} key={key}>
                  {car?.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField id="standard-basic" label="Mensagem" variant="standard" />
        </form>

        <div className={"checkBox"}>
          <input type="checkbox" className="input-check" />
          <p>
            Aceito a <span>Política de Privacidade.</span>
          </p>
        </div>
        <button className={"buttonEnviar"}>Enviar</button>
      </div>
    </div>
  );
};

export default FormCotacao;
