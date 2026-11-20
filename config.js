// Ligação ao projeto Supabase novo do Maré e Brasa.
// Só chave pública (publishable). Nunca coloques aqui a service_role / secret.
window.MB_CONFIG = {
  url: "https://cnjckfbnruwrcimkxnja.supabase.co",
  key: "sb_publishable_HdZV0bKPJUtijDAqPIFYyw_qaOhgpXc",

  // OPCIONAL — só aparecem no site se preencheres.
  // Endereço do restaurante (texto). Cria o botão "Como chegar" com Google Maps.
  endereco: "",
  // Alternativa: link do Google Maps (Partilhar > Copiar link). Se preencheres, tem prioridade sobre o endereço.
  mapa: "",
  // Horário das reservas (hora da primeira e da última reserva, de 0 a 23). Se não preencheres: 11 e 22.
  horaAbre: 11,
  horaFecha: 22
};
