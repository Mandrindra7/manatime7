"use client";
import { useState } from "react";

import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Button } from "@mui/material";

import "@/assets/css/form.scss";

import { addAbsence, users } from "@/Data/absence";
import { Absence } from "@/Data/type";
import { useRouter } from "next/navigation";
import dayjs from "dayjs";

const Page: React.FC = () => {
  const [form, setForm] = useState<Absence>({
    user: "",
    category: "",
    period: "",
    actual_solde: 0,
    taking_solde: 0,
    futur_solde: 0,
  });
  const [error, setError] = useState({
    user: false,
    category: false,
    period: false,
    actual_solde: false,
    taking_solde: false,
    futur_solde: false,
  });

  const router = useRouter();

  const handleChange = (e: any) => {
    const _temp: any = { ...form };
    _temp[e.target.name] = e.target.value;
    setForm(_temp);
  };

  const handleDatePicker = (value: any) => {
    const _temp: Absence = { ...form };
    _temp.period = value.$y;
    setForm(_temp);
  };
  const isFormValid = () => {
    return (
      form.user &&
      form.category &&
      form.period &&
      form.actual_solde &&
      form.taking_solde &&
      form.futur_solde
    );
  };
  const createAbsence = () => {
    console.log(form);
    if (isFormValid()) {
      addAbsence(form);
      router.push("/absence");
    } else {
      const _tempError = { ...error };
      !form.user && (_tempError.user = true);
      !form.category && (_tempError.category = true);
      !form.period && (_tempError.period = true);
      !form.actual_solde && (_tempError.actual_solde = true);
      !form.taking_solde && (_tempError.taking_solde = true);
      !form.futur_solde && (_tempError.futur_solde = true);

      setError(_tempError);
    }
  };
  return (
    <Box className="form">
      <h1 className="title">Ajouter une Absense</h1>
      <FormControl>
        <InputLabel id="demo-simple-select-label">Utilisateurs</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="utilisateurs"
          variant="standard"
          name="user"
          value={form.user}
          onChange={(event) => handleChange(event)}
          required
          error={error.user}
        >
          {users.map((user, index) => (
            <MenuItem key={user + index} value={user}>
              {user}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl>
        <TextField
          id="standard-basic"
          label="Categories"
          variant="standard"
          type="text"
          name="category"
          value={form.category}
          onChange={(event) => handleChange(event)}
          required
          error={error.category}
        />
      </FormControl>
      <FormControl>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker
              label="Période"
              views={["year"]}
              value={dayjs(form.period)}
              onChange={handleDatePicker}
            />
          </DemoContainer>
        </LocalizationProvider>
      </FormControl>
      <FormControl>
        <TextField
          id="standard-basic"
          label="Solde actuel"
          variant="standard"
          type="number"
          name="actual_solde"
          value={form.actual_solde}
          onChange={(event) => handleChange(event)}
          required
          error={error.actual_solde}
        />
      </FormControl>
      <FormControl>
        <TextField
          id="standard-basic"
          label="Solde pris"
          variant="standard"
          type="number"
          name="taking_solde"
          value={form.taking_solde}
          onChange={(event) => handleChange(event)}
          required
          error={error.taking_solde}
        />
      </FormControl>
      <FormControl>
        <TextField
          id="standard-basic"
          label="Solde futur"
          variant="standard"
          type="number"
          name="futur_solde"
          value={form.futur_solde}
          onChange={(event) => handleChange(event)}
          required
          error={error.futur_solde}
        />
      </FormControl>
      <Button color="primary" onClick={createAbsence}>
        Ajouter
      </Button>
    </Box>
  );
};

export default Page;
