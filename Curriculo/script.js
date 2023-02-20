

function mudarTudo() 
{
    d = document.getElementById("select_id").value;
    if (d == 0)
    {
        document.location.reload(true);
        
    }
    if (d == 1) //deadpool
    {
        document.body.style.backgroundColor = 'red';
        document.getElementById("tituloNome").innerHTML = "Deadpol da Silva"
        document.getElementById("imagem").innerHTML = "<img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/89f9adda-0ce2-41ca-bd0a-629c69bba8e5/dapuv77-136f3b3e-66ea-4d43-9bbd-e38008c80c4f.png/v1/fill/w_829,h_964,strp/deadpool_png__3_by_anna_x_anarchy_dapuv77-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTE5MSIsInBhdGgiOiJcL2ZcLzg5ZjlhZGRhLTBjZTItNDFjYS1iZDBhLTYyOWM2OWJiYThlNVwvZGFwdXY3Ny0xMzZmM2IzZS02NmVhLTRkNDMtOWJiZC1lMzgwMDhjODBjNGYucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.TrD-FIdUthi-6Mnxfv0H4QR0Qhp5QJENX2DhEpiZXQ8' width='250'>"

    }
    else if (d == 2) //batman
    {
        document.body.style.backgroundColor = 'yellow';
        document.getElementById("tituloNome").innerHTML = "Batman Bruce Wayne"
        document.getElementById("imagem").innerHTML = "<img src='https://i0.wp.com/multarte.com.br/wp-content/uploads/2019/02/225cb8d8d207377e490d39188781fc5b.png?resize=1024%2C778&ssl=1' width='250'>"
    }
}

