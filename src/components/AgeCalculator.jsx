import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function AgeCalculator() {
  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState(null);

  const calculateAge = (e) => {
    e.preventDefault();

    if (!birthDate) return;

    const sekarang = new Date();
    const birth = new Date(birthDate);

    let years = sekarang.getFullYear() - birth.getFullYear();
    let months = sekarang.getMonth() - birth.getMonth();
    let days = sekarang.getDay() - birth.getDay();

    if (days < 0) {
      months--;
      const previousMount = new Date(
        sekarang.getFullYear(),
        sekarang.getMonth(),
        0,
      ).getDate();
      days += previousMount;
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    setAge({ years, months, days });
  };
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card shadow-sm" style={{ width: "24rem" }}>
        <div className="card-body p-4">
          <h2 className="card-title text-center mb-4">Kalkulator Usia</h2>

          <form action="">
            <div className="mb-3">
              <label htmlFor="birthdate" className="form-label">
                Masukkan tanggal lahir kamu:
              </label>
              <input
                type="date"
                className="form-control"
                id="birthdate"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
              />
            </div>
            <button
              type="submit"
              onClick={calculateAge}
              className="btn btn-success w-100"
            >
              Hitung Usia
            </button>
          </form>

          {age && (
            <div className="text-center mt-4">
              <p className="text-muted mb-3">Usia kamu adalah:</p>
              <div className="d-flex justify-content-center gap-4">
                <div>
                  <p className="fs-3 fw-bold text-success mb-0">{age.years}</p>
                  <p className="text-muted small">tahun</p>
                </div>
                <div>
                  <p className="fs-3 fw-bold text-success mb-0">{age.months}</p>
                  <p className="text-muted small">bulan</p>
                </div>
                <div>
                  <p className="fs-3 fw-bold text-success mb-0">{age.days}</p>
                  <p className="text-muted small">hari</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AgeCalculator;
