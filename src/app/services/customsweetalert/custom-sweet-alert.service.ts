import Swal, { SweetAlertResult } from 'sweetalert2';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CustomSweetAlertService {
  // alertTermoCompromisso() {
  //   throw new Error('Method not implemented.');
  // }
  // constructor(
  //   public user: UserService
  // ) { }

  // alertSuccess(message: string): void {
  //   Swal.fire({
  //     icon: "success",
  //     title: message,
  //   });
  // }

  // alertCamera(message: string): Promise<SweetAlertResult> {
  //   return Swal.fire({
  //     html: '<div class="row"><div class="col-8 mx-auto mb-4"><img src="assets/images/Alerta.svg" /></div></div>' + message,
  //     // confirmButtonColor: '#5D8B2F'
  //     showCancelButton: true,
  //     showConfirmButton: true,
  //     confirmButtonColor: '#cecece',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'CONTINUAR',
  //     cancelButtonText: 'SAIR',
  //   }).then();
  // }

  // alertSelfieInstrucoes() {
  //   const groupColor = (this.user.group === 'A') ? '#5c881a' : '#A4BA08';
  //   return Swal.fire({
  //     html: '<div class="row">' + '<div class="col-12 mx auto mx auto">' +
  //       '<mat-icon><span class="material-icons-outlined" style="font-size: 126px; color: ' + groupColor + '; margin-bottom: 20px">check_circle_outline</span></mat-icon>' + '</div>' + '</div>' +
  //       '<div class="row mt-3 mb-3">' + '<div class="col-12">' + '<h3 style="color:#9cbb3a">PARA UMA BOA SELFIE, POSICIONE O SEU ROSTO NO QUADRO</h3>'
  //       + '</div>' + '</div>',
  //     showConfirmButton: true,
  //     confirmButtonText: "CONTINUAR",
  //     confirmButtonColor: "#5D8B2F",
  //     width: 850
  //   });
  // }

  // alertExcluirGrupo() {
  //   const groupColor = (this.user.group === 'A') ? '#5c881a' : '#A4BA08';
  //   return Swal.fire({
  //     html:
  //       '<mat-icon><span class="material-icons-outlined" style="font-size: 126px; color: ' + groupColor + '; margin-bottom: 20px">attach_email</span></mat-icon>' +
  //       '<h4 style="color: #707070;font-weight: bold;margin: auto;" class="col-8">Tem certeza que deseja excluir o grupo da fatura múltipla?</h4>' +
  //       '<p style="color: #707070; margin-top: 20px; font-weight: normal;">Caso o grupo seja excluído, o cliente receberá todas as faturas separadas de acordo com a unidade consumidora no endereço e data de vencimento de acordo com a norma.</p>',
  //     allowOutsideClick: false,
  //     width: 700,
  //     cancelButtonText: "SIM",
  //     confirmButtonText: "NÃO",
  //     confirmButtonColor: '#707070',
  //     cancelButtonColor: groupColor,
  //     showCancelButton: true,
  //     focusCancel: false
  //   });
  // }

  // alertRemoverUc(uc: any) {
  //   const groupColor = (this.user.group === 'A') ? '#5c881a' : '#A4BA08';
  //   return Swal.fire({
  //     html:
  //       '<mat-icon><span class="material-icons-outlined" style="font-size: 126px; color: ' + groupColor + '; margin-bottom: 20px">attach_email</span></mat-icon>' +
  //       '<h4 style="color: #707070;font-weight: bold;margin: auto;" class="col-10">Tem certeza que deseja remover a unidade consumidora ' + uc + ' da fatura múltipla?</h4>' +
  //       '<p style="color: #707070; margin-top: 20px; font-weight: normal;">Caso a unidade seja removida, o cliente receberá todas as faturas separadas de acordo com a unidade consumidora no endereço e data de vencimento de acordo com a norma.</p>',
  //     allowOutsideClick: false,
  //     width: 700,
  //     cancelButtonText: "SIM",
  //     confirmButtonText: "NÃO",
  //     confirmButtonColor: '#707070',
  //     cancelButtonColor: groupColor,
  //     showCancelButton: true,
  //     focusCancel: false
  //   });
  // }

  // ucRemovida() {
  //   const groupColor = (this.user.group === 'A') ? '#5c881a' : '#A4BA08';
  //   return Swal.fire({
  //     html:
  //       '<mat-icon><span class="material-icons-outlined" style="font-size: 126px; color: ' + groupColor + '; margin-bottom: 20px">check_circle</span></mat-icon>' +
  //       '<h4 style="color: #707070;font-weight: bold;margin: auto;" class="col-10">Unidade Removida</h4>' +
  //       '<p style="color: #707070;margin: 20px auto;font-weight: normal;" class="col-8">Acesse as unidades consumidoras pertencentes a esse grupo que foi excluído para realizar o cadastro no débito automático e escolher uma data boa.</p>',
  //     allowOutsideClick: false,
  //     width: 700,
  //     confirmButtonText: "FECHAR",
  //     confirmButtonColor: groupColor,
  //   });
  // }

  // grupoExcluido() {
  //   const groupColor = (this.user.group === 'A') ? '#5c881a' : '#A4BA08';
  //   return Swal.fire({
  //     html:
  //       '<mat-icon><span class="material-icons-outlined" style="font-size: 126px; color: ' + groupColor + '; margin-bottom: 20px">check_circle</span></mat-icon>' +
  //       '<h4 style="color: #707070;font-weight: bold;margin: auto;" class="col-8">Fatura múltipla excluída</h4>' +
  //       '<p style="color: #707070;margin: 20px auto;font-weight: normal;" class="col-8">Acesse as unidades consumidoras pertencentes a esse grupo que foi excluído para realizar o cadastro no débito automático e escolher uma data boa.</p>',
  //     allowOutsideClick: false,
  //     width: 700,
  //     confirmButtonText: "FECHAR",
  //     confirmButtonColor: groupColor,
  //   });
  // }


  // alertCartaoCredito() {
  //   const groupColor = (this.user.group === 'A') ? '#5c881a' : '#A4BA08';
  //   return Swal.fire({
  //     html:
  //       '<mat-icon><span class="material-icons-outlined" style="font-size: 126px; color: ' + groupColor + '; margin-bottom: 20px">schedule</span></mat-icon>' +
  //       '<h4 style="color: #707070;font-weight: bold;margin: auto;" class="col-12 col-md-8">Você está sendo redirecionado para a página de pagamento do FlexPag.</h4>' +
  //       '<p style="color: #707070; margin-top: 20px; font-weight: normal;">Aguarde por favor. :)</p>',
  //     allowOutsideClick: false,
  //     width: 700,
  //     confirmButtonText: "FECHAR",
  //     confirmButtonColor: groupColor,
  //   });
  // }

  // alertCodigoBarras() {
  //   const groupColor = (this.user.group === 'A') ? '#5c881a' : '#A4BA08';
  //   return Swal.fire({
  //     html:
  //       '<mat-icon><span class="material-icons-outlined" style="font-size: 126px; color: ' + groupColor + '; margin-bottom: 20px">check_circle</span></mat-icon>' +
  //       '<h4 style="color: #707070;font-weight: bold;margin: auto;" class="class="col-12 col-md-8"">Copiado com sucesso!</h4>' +
  //       '<p style="color: #707070; margin-top: 20px; font-weight: normal; margin: 20px auto auto auto;" class="col-12 col-md-8">Acesse o internet banking e cole o código de barras do boleto no campo indicado no site.</p>' +
  //       '<p style="color: #707070; margin-top: 20px; font-weight: normal; margin: 20px auto auto auto;" class="col-12 col-md-8">O pedido será cancelado caso o boleto não seja pago até o vencimento.</p>',
  //     allowOutsideClick: false,
  //     width: 700,
  //     confirmButtonText: "FECHAR",
  //     confirmButtonColor: groupColor,
  //   });
  // }

  // alertVisualizarFatura(fatura): void {
  //   const groupColor = (this.user.group === 'A') ? '#5c881a' : '#A4BA08';
  //   Swal.fire({
  //     html:
  //       '<mat-icon><span class="material-icons-outlined" style="font-size: 126px; color: #ff3921; margin-bottom: 10px;">error_outline</span></mat-icon>' +
  //       '<h4 style="color: #ff3921;font-weight: bold;margin: auto;" class="col-8">Informações da fatura</h4>' +
  //       '<div class="col-8" style="text-align: justify;margin: 0 auto 28px auto;">' +
  //       `<p style="font-weight: 600;font-size: 22px;margin-top: 20px;margin-bottom: 6px;">R$ ${fatura.valor}</p>` +
  //       '<p style="margin-bottom: 6px;">Número da unidade consumidora: 9********1.</p>' +
  //       '<p style="margin-bottom: 6px;">Endereço: Av. M**. De****o da F*****a, 1*** C*****o, L******a-**, *****-***.</p>' +
  //       `<p style="margin-bottom: 6px;">Vencimento: ${fatura.vencimento}.</p>` +
  //       `<p style="margin-bottom: 6px;">Status: ${fatura.status}.</p>` +
  //       '</div>' +
  //       '<div style="margin: auto;" class="col-10">' +
  //       `<p style="padding: 10px 20px; background-color: ${groupColor}; color: #FFF; border-radius: 4px;">${fatura.codigoBarras}</p>` +
  //       '</div>' +
  //       '<div class="col-12" style="margin: 20px auto 4px;">' +
  //       `<button id="copy" class="col-6 col-md-3 btn" style="background-color: ${groupColor}; color: #FFF; margin: 5px; border-radius: 26px;">Copiar Código</button>` +
  //       '</div>' +
  //       '<span id="toast" style="visibility: hidden; padding: 5px 10px; background-color: ' + groupColor + '; color: #FFF; font-weight: normal; border-radius: 4px;">Copiado!</span>' +
  //       '<h4 style="color: #707070; font-weight: bold; margin: 10px auto auto auto;" class="col-8">Pague com internet banking</h4>' +
  //       '<p style="color: #707070; margin-top: 20px; font-weight: normal; margin: 20px auto auto auto;" class="col-8">No aplicativo, internet banking ou caixa eletrônicos dos bancos conveniados.</p>' +
  //       "<div>" +
  //       '<p style="text-align: left; font-weight: bold; margin: 20px auto 20px 20px;">Selecione um dos bancos abaixo ou procure um de sua preferência:</p>' +
  //       '<div style="display: flex; justify-content: space-evenly; flex-wrap: wrap;">' +
  //       '<a href="https://www.itau.com.br/" target="_blank" style="display: flex; flex-direction: column; cursor: pointer; text-decoration:none !important;"><img style="width: 100px;" src="assets/images/icons/logo_itau.png"/><span style="font-weight:bold; color: #000;">Itaú</span></a>' +
  //       '<a href="https://banco.bradesco/" target="_blank" style="display: flex; flex-direction: column; cursor: pointer; text-decoration:none !important;"><img style="width: 100px;" src="assets/images/icons/logo_bradesco.png"/><span style="font-weight:bold; color: #000;">Bradesco</span></a>' +
  //       '<a href="https://www.caixa.gov.br/" target="_blank" style="display: flex; flex-direction: column; cursor: pointer; text-decoration:none !important;"><img style="width: 100px;" src="assets/images/icons/logo_caixa.png"/><span style="font-weight:bold; color: #000;">Caixa</span></a>' +
  //       '<a href="https://www.bb.com.br/" target="_blank" style="display: flex; flex-direction: column; cursor: pointer; text-decoration:none !important;"><img style="width: 100px; align-self: center;" src="assets/images/icons/logo_bb.png"/><span style="font-weight:bold; color: #000;">Banco do Brasil</span></a>' +
  //       '<a href="https://www.santander.com.br/" target="_blank" style="display: flex; flex-direction: column; cursor: pointer; text-decoration:none !important;"><img style="width: 100px;" src="assets/images/icons/logo_stdr.png"/><span style="font-weight:bold; color: #000;">Santander</span></a>' +
  //       "</div>" +
  //       "</div>" +
  //       '<p style="margin: 30px auto auto auto;">O seu pagamento pode ser confirmado em 5h se for feito através dos bancos conveniados (Itaú, Santander, Bradesco, Caixa e Banco de Brasil).</p>' +
  //       '<p style="margin: 30px auto auto auto;">Para os demais bancos a confirmação será feita em até três dias.</p>' +
  //       '<p style="margin: 30px auto auto auto;">Lembre-se de pagar seu boleto até a data de vencimento original de sua fatura para evitar juros e multas.</p>',
  //     allowOutsideClick: false,
  //     width: 700,
  //     confirmButtonText: "FECHAR",
  //     confirmButtonColor: groupColor,
  //   });
  //   document.getElementById("copy").addEventListener("click", copyCodigoBarras);
  //   function copyCodigoBarras() {
  //     navigator.clipboard.writeText(fatura.codigoBarras);
  //     document.getElementById('toast').style.visibility = "visible";
  //     setTimeout(() => {
  //       document.getElementById('toast').style.visibility = "hidden";
  //     }, 1500);
  //   }
  // }

  // alertInternetBanking(): void {
  //   const groupColor = (this.user.group === 'A') ? '#5c881a' : '#A4BA08';
  //   var codigoBarras = "364 99.32766 55400.013383 13626.40101 4 772400000 12000";
  //   Swal.fire({
  //     html:
  //       '<mat-icon><span class="material-icons-outlined" style="font-size: 126px; color: #ff3921; margin-bottom: 10px;">error_outline</span></mat-icon>' +
  //       '<p style="color: #707070; font-weight: normal; margin: 20px auto 20px auto;" class="col-12 col-md-8">Código de barras copiado para a área de transferência</p>' +
  //       `<p class="col-12 col-md-10" style="padding: 10px 20px; background-color: ${groupColor}; color: #FFF; border-radius: 4px; margin: auto;">${codigoBarras}</p>` +
  //       '<p class="col-8 col-md-3" style="color: #0063be; font-weight: bold; text-decoration: none; position; cursor: pointer; margin: 20px auto 10px auto" id="copy">Copiar novamente</p>' +
  //       '<span id="toast" style="visibility: hidden; padding: 5px 10px; background-color: ' + groupColor + '; color: #FFF; font-weight: normal; border-radius: 4px;">Copiado!</span>' +
  //       '<h4 style="color: #707070; font-weight: bold; margin: 10px auto auto auto;" class="col-12 col-md-8">Pague com internet banking</h4>' +
  //       '<p style="color: #707070; margin-top: 20px; font-weight: normal; margin: 20px auto auto auto;" class="col-12 col-md-8">No aplicativo, internet banking ou caixa eletrônicos dos bancos conveniados.</p>' +
  //       "<div>" +
  //       '<p style="text-align: left; font-weight: bold; margin: 20px auto 5px 20px;">Selecione um dos bancos abaixo ou procure um de sua preferência:</p>' +
  //       '<div style="display: flex; justify-content: space-evenly; flex-wrap: wrap;">' +
  //       '<a href="https://www.itau.com.br/" target="_blank" style="display: flex; flex-direction: column; cursor: pointer; text-decoration:none !important;"><img style="width: 110px;" src="assets/images/icons/logo_itau.png"/><span style="font-weight:bold; color: #000;">Itaú</span></a>' +
  //       '<a href="https://banco.bradesco/" target="_blank" style="display: flex; flex-direction: column; cursor: pointer; text-decoration:none !important;"><img style="width: 110px;" src="assets/images/icons/logo_bradesco.png"/><span style="font-weight:bold; color: #000;">Bradesco</span></a>' +
  //       '<a href="https://www.caixa.gov.br/" target="_blank" style="display: flex; flex-direction: column; cursor: pointer; text-decoration:none !important;"><img style="width: 110px;" src="assets/images/icons/logo_caixa.png"/><span style="font-weight:bold; color: #000;">Caixa</span></a>' +
  //       '<a href="https://www.bb.com.br/" target="_blank" style="display: flex; flex-direction: column; cursor: pointer; text-decoration:none !important;"><img style="width: 110px;" src="assets/images/icons/logo_bb.png"/><span style="font-weight:bold; color: #000;">Banco do Brasil</span></a>' +
  //       '<a href="https://www.santander.com.br/" target="_blank" style="display: flex; flex-direction: column; cursor: pointer; text-decoration:none !important;"><img style="width: 110px;" src="assets/images/icons/logo_stdr.png"/><span style="font-weight:bold; color: #000;">Santander</span></a>' +
  //       "</div>" +
  //       "</div>" +
  //       '<p style="margin: 30px auto auto auto;">O seu pagamento pode ser confirmado em 5h se for feito através dos bancos conveniados (Itaú, Santander, Bradesco, Caixa e Banco de Brasil).</p>' +
  //       '<p style="margin: 30px auto auto auto;">Para os demais bancos a confirmação será feita em até três dias.</p>' +
  //       '<p style="margin: 30px auto auto auto;">Lembre-se de pagar seu boleto até a data de vencimento original de sua fatura para evitar juros e multas.</p>',
  //     allowOutsideClick: false,
  //     width: 700,
  //     confirmButtonText: "FECHAR",
  //     confirmButtonColor: groupColor,
  //   });
  //   document.getElementById("copy").addEventListener("click", copyCodigoBarras);
  //   function copyCodigoBarras() {
  //     navigator.clipboard.writeText(codigoBarras);
  //     document.getElementById('toast').style.visibility = "visible";
  //     setTimeout(() => {
  //       document.getElementById('toast').style.visibility = "hidden";
  //     }, 1500);
  //   }
  // }


  // segundaVia(): void {
  //   const groupColor = (this.user.group === 'A') ? '#5c881a' : '#A4BA08';
  //   const blockedColor = '#707070';
  //   const emailAtual = "kelly.macagi@br.ey.com";
  //   const pedirEnvio = '<mat-icon><span class="material-icons-outlined" style="font-size: 126px; color: ' + groupColor + ';">check_circle</span></mat-icon> \
  //   <h4 style="color: #707070; font-weight: bold; margin: 20px auto auto auto;" class="col-12 col-md-8">Informe o e-mail que deseja receber sua fatura.</h4> \
  //   <input \
  //   style="padding: 10px; \
  //   border-radius: 6px; \
  //   border: 1px solid lightgrey; \
  //   margin-top: 20px; auto; \
  //   min-width: 70%; \
  //   type="email" id="email" name="email" maxlength="51" placeholder="Digite um endereço de e-mail" value="'+ emailAtual + '"> \
  //   <h4 style="color: #707070; font-weight: bold; margin: 20px auto 20px auto;" class="col-12 col-md-10">Por qual motivo fez a solicitação?</h4> \
  //   <div style="text-align: left; width: max-content; margin: 0 auto;"> \
  //    <input type="radio" id="motivo1" name="motivo" value="Extravio"><label for="motivo1" style="margin-left: 5px;"> Extravio</label><br> \
  //    <input type="radio" id="motivo2" name="motivo" value="Fatura danificada"><label for="motivo2" style="margin-left: 5px;"> Fatura danificada</label><br> \
  //    <input type="radio" id="motivo3" name="motivo" value="Fatura não entregue"><label for="motivo3" style="margin-left: 5px;"> Fatura não entregue</label><br> \
  //    <input type="radio" id="motivo4" name="motivo" value="Comprovar residência"><label for="motivo4" style="margin-left: 5px;"> Comprovar residência</label><br> \
  //    <input type="radio" id="motivo5" name="motivo" value="Não estou com a fatura em mãos"><label for="motivo5" style="margin-left: 5px;"> Não estou com a fatura em mãos</label><br> \
  //    <input type="radio" id="motivo6" name="motivo" value="Outro"><label for="motivo6" style="margin-left: 5px;"> Outro</label><br> \
  //   </div> \
  //   <button class="col-6 col-md-3 btn btn-confirm-alert" id="enviar">ENVIAR</button> \
  //   <p class="col-6 col-md-3" style="color: #0063be; font-weight: bold; text-decoration: none; position; cursor: pointer; margin: 20px auto 10px auto" id="cancelar">Cancelar</p> \
  //   ';

  //   const enviado = ' \
  //     <mat-icon><span class="material-icons-outlined" style="font-size: 126px; color: '+ groupColor + ';">check_circle</span></mat-icon> \
  //     <h4 style="color: #707070; font-weight: bold; margin: 20px auto auto auto;" class="col-8">Fatura enviada com sucesso!</h4> \
  //     <p style="color: #707070; font-weight: normal; margin: 20px auto 20px auto;" class="col-8">Verifique a caixa de spam caso necessário.</p> \
  //     ';

  //   const emailInvalido = ` \
  //   <mat-icon><span class="material-icons-outlined" style="font-size: 126px; color: red">highlight_off</span></mat-icon> \
  //   <h4 style="color: #707070; font-weight: bold; margin: 20px auto auto auto;" class="col-8">E-mail Inválido!</h4> \
  //   <p style="color: #707070; font-weight: normal; margin: 20px auto 20px auto;" class="col-8">Preencha corretamente o e-mail que deseja receber sua fatura.</p> \
  //   `;

  //   let conteudo = pedirEnvio;

  //   Swal.fire({
  //     html: pedirEnvio,
  //     showCancelButton: false,
  //     showConfirmButton: false,
  //     allowOutsideClick: false,
  //     width: 600,
  //   });

  //   document.getElementById("enviar").setAttribute("disabled", "disabled");
  //   if (document.getElementById("enviar")) {
  //     document.getElementById("enviar").addEventListener("click", enviarMotivo);
  //     document.getElementById("cancelar").addEventListener("click", cancelar);
  //   }
  //   if (document.getElementById("fechar")) {
  //     document.getElementById("fechar").addEventListener("click", cancelar);
  //   }
  //   if (document.getElementById("motivo1") || document.getElementById("motivo2") || document.getElementById("motivo3") || document.getElementById("motivo4") ||
  //     document.getElementById("motivo5") || document.getElementById("motivo6")) {
  //     document.getElementById("motivo1").addEventListener("click", desbloqueiaBotao);
  //     document.getElementById("motivo2").addEventListener("click", desbloqueiaBotao);
  //     document.getElementById("motivo3").addEventListener("click", desbloqueiaBotao);
  //     document.getElementById("motivo4").addEventListener("click", desbloqueiaBotao);
  //     document.getElementById("motivo5").addEventListener("click", desbloqueiaBotao);
  //     document.getElementById("motivo6").addEventListener("click", desbloqueiaBotao);
  //   }
  //   function desbloqueiaBotao() {
  //     document.getElementById("enviar").removeAttribute("disabled");
  //   }
  //   function enviarMotivo() {
  //     let radios = document.getElementsByName('motivo');
  //     let email = (<HTMLInputElement>document.getElementById('email')).value;
  //     let motivoChecked = false;
  //     let regexEmail = /\S+@\S+\.\S+/;

  //     for (var i = 0, length = radios.length; i < length; i++) {
  //       const inputRadio = radios[i] as HTMLInputElement;
  //       if (inputRadio.checked) {
  //         motivoChecked = true;
  //       }
  //     }
  //     if (regexEmail.test(email)) {
  //       if (motivoChecked) {
  //         Swal.close();
  //         Swal.fire({
  //           html: enviado,
  //           showCancelButton: false,
  //           confirmButtonText: "FECHAR",
  //           confirmButtonColor: groupColor,
  //           allowOutsideClick: false,
  //           width: 600,
  //         });
  //       }
  //     } else {
  //       Swal.fire({
  //         html: emailInvalido,
  //         showCancelButton: false,
  //         confirmButtonText: "FECHAR",
  //         confirmButtonColor: groupColor,
  //         allowOutsideClick: false,
  //         width: 600,

  //       }).then((result) => {
  //         Swal.fire({
  //           html: pedirEnvio,
  //           showCancelButton: false,
  //           showConfirmButton: false,
  //           allowOutsideClick: false,
  //           width: 600,
  //         });
  //       }
  //       );
  //     }
  //   }

  //   function cancelar() {
  //     Swal.close();
  //   }
  // }

  // alertPixIndisponivel() {
  //   const groupColor = (this.user.group === 'A') ? '#5c881a' : '#A4BA08';
  //   Swal.fire({
  //     html:
  //       '<mat-icon><span class="material-icons-outlined" style="font-size: 126px; color: #FF5A00; margin-bottom: 10px;">cancel</span></mat-icon> \
  //       <h4 style="color: #707070; font-weight: bold; margin: 12px auto 12px auto;" class="col-12 col-md-8">Serviço indisponível no momento</h4> \
  //       <p style="color: #707070; font-weight: 500; font-size: 18px; margin: 20px auto 20px auto; letter-spacing: 0.36px;" class="col-12 col-md-10">Estamos trabalhando para habilitar o pagamento via PIX</p>',
  //     allowOutsideClick: false,
  //     width: 700,
  //     confirmButtonText: "FECHAR",
  //     confirmButtonColor: groupColor,
  //   });
  // }

  // alertConfirmarCancelamento() {
  //   const groupColor = (this.user.group === 'A') ? '#5c881a' : '#A4BA08';

  //   return Swal.fire({
  //     html:
  //       '<h4 style="color: #707070; font-weight: bold; margin: 12px auto 12px auto;" class="col-9">Tem certeza que deseja cancelar esta solicitação?</h4> \
  //       <p style="color: #707070; font-weight: 500; font-size: 18px; margin: 20px auto 20px auto; letter-spacing: 0.36px;" class="col-10">Todas as informações preenchidas serão perdidas.</p>',
  //     allowOutsideClick: false,
  //     width: 700,
  //     cancelButtonText: "NÃO",
  //     confirmButtonText: "SIM",
  //     confirmButtonColor: '#707070',
  //     cancelButtonColor: groupColor,
  //     showCancelButton: true,
  //     focusCancel: true
  //   });
  // }

  // alertRepresentanteLegal() {
  //   return Swal.fire({
  //     html:
  //       '<h4 style="color: #707070; font-weight: bold; margin: 12px auto 12px auto;" class="col-9">Termo de compromisso - Representante Legal</h4> \
  //       <p style="color: #707070; font-weight: 500; font-size: 18px; margin: 20px auto 20px auto; letter-spacing: 0.36px;" class="col-10">Declaro que li e estou ciente que apenas o representante legal mencionado em ata, estatuto social, contrato social ou CCMEI pode solicitar uma Ligação Nova para o CNPJ cadastrado no portal do Ligação Nova.</p> \
  //       <p style="color: #F80B0B; font-weight: 500; font-size: 18px; margin: 20px auto 20px auto; letter-spacing: 0.36px;" class="col-10">ATENÇÃO: Caso você não seja o representante legal, a solicitação de Ligação Nova será recusada e o imóvel não receberá a ligação.</p>',

  //     allowOutsideClick: false,
  //     width: 950,
  //     confirmButtonText: "NÃO SOU O RESPONSÁVEL",
  //     cancelButtonText: "SOU O RESPONSÁVEL",
  //     cancelButtonColor: '#A4BA08',
  //     confirmButtonColor: '#6c757d',
  //     showCancelButton: true,
  //     focusCancel: true
  //   });
  // }

  // religacaoPagarFatura() {
  //   const groupColor = (this.user.group === 'A') ? '#5c881a' : '#A4BA08';
  //   Swal.fire({
  //     html:
  //       '<mat-icon><span class="material-icons-outlined" style="font-size: 126px; color: ' + groupColor + '; margin-bottom: 10px;">description</span></mat-icon> \
  //       <h4 style="color: #707070; font-weight: bold; margin: 12px auto 20px auto;" class="col-9">Como prefere fazer o pagamento?</h4> \
  //       <div style="text-align: left; width: max-content; margin: 12px auto 12px auto;"> \
  //         <input type="radio" id="motivo1" name="motivo" value="todas" checked><label for="motivo1" style="margin-left: 5px; margin-botton: 20px;"> Pagar todas as faturas com cartão de crédito</label><br> \
  //         <input type="radio" id="motivo2" name="motivo" value="individualmente"><label for="motivo2" style="margin-left: 5px;"> Pagar faturas individualmente</label><br> \
  //        </div> \
  //        <button class="col-6 col-md-3 btn btn-confirm-alert" id="continuar" style="background-color:'+ groupColor + '; padding: 10px 12px; font-weight: 400;">CONTINUAR</button> \
  //        <p class="col-6 col-md-3" style="color: #0063be; font-weight: bold; text-decoration: none; position; cursor: pointer; margin: 12px auto 10px auto" id="cancelar">Cancelar</p>',
  //     showCancelButton: false,
  //     showConfirmButton: false,
  //     allowOutsideClick: false,
  //     width: 600,
  //   });
  //   document.getElementById("cancelar").addEventListener("click", cancelar);
  //   document.getElementById("continuar").addEventListener("click", continuar);

  //   function continuar() {
  //     Swal.close();
  //   }

  //   function cancelar() {
  //     Swal.close();
  //   }
  // }

  // alertSuccessWithCallback(message: string) {
  //   return Swal.fire({
  //     icon: "success",
  //     title: message,
  //   });
  // }

  alertError(message: string): void {
    Swal.fire({
      icon: "error",
      title: message,
    });
  }

  // alertInfo(message: string): Promise<SweetAlertResult> {
  //   return Swal.fire({
  //     icon: "info",
  //     title: message,
  //   }).then();
  // }

  // showLoading() {
  //   Swal.fire({
  //     title: 'Carregando',
  //     allowOutsideClick: false,
  //     didOpen: () => {
  //       Swal.showLoading();
  //     }
  //   });
  // }

  // showLoadingText(msg: string) {
  //   if (!msg) msg = "Loading";
  //   Swal.fire({
  //     title: msg,
  //     didOpen: () => {
  //       Swal.showLoading();
  //     },
  //     allowOutsideClick: false,
  //   });
  // }

  closeLoading() {
    Swal.close();
  }

  // confirmDialog(tt: string, msg: string, tp: any) {
  //   return Swal.fire({
  //     title: tt,
  //     text: msg,
  //     icon: tp,
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Confirm",
  //     cancelButtonText: "Cancel",
  //   });
  // }

  // confirmOnlyDialog(tt: string, msg: string, tp: any) {
  //   return Swal.fire({
  //     title: tt,
  //     text: msg,
  //     icon: tp,
  //     showCancelButton: false,
  //     confirmButtonColor: "#3085d6",
  //     confirmButtonText: "OK",
  //   });
  // }

  // alertBasic(message: string): void {
  //   Swal.fire(message);
  // }

  // alertTimer(timerInterval) {
  //   Swal.fire({
  //     title: "Running alignment!",
  //     html: "It will end in in <strong></strong> seconds.<br/><br/>",
  //     timer: 3000,
  //     allowOutsideClick: false,
  //     willOpen: () => {
  //       const content = Swal.getContainer();
  //       const $ = content.querySelector.bind(content);

  //       Swal.showLoading();

  //       timerInterval = setInterval(() => {
  //         Swal.getContainer().querySelector("strong").textContent = (
  //           Swal.getTimerLeft() / 1000
  //         ).toFixed(0);
  //       }, 100);
  //     },
  //     willClose: () => {
  //       clearInterval(timerInterval);
  //     },
  //   });
  // }

  // showLoadingStatus(msg: string, data: any) {
  //   Swal.fire({
  //     title: msg + data.status,
  //     didOpen: () => {
  //       Swal.showLoading();
  //     },
  //     allowOutsideClick: false,
  //   });
  // }

  // alertAlteradoSucesso(msg: string) {
  //   const groupColor = (this.user.group === 'A') ? '#5c881a' : '#A4BA08';
  //   return Swal.fire({
  //     html:
  //       '<mat-icon><span class="material-icons-outlined" style="font-size: 126px; color: ' + groupColor + '; margin-bottom: 20px">check_circle_outline</span></mat-icon>' +
  //       '<h4 style="color: #707070;font-weight: bold;margin: auto;" class="col-8">' + msg + '</h4>',
  //     allowOutsideClick: false,
  //     width: 700,
  //     confirmButtonText: "FECHAR",
  //     confirmButtonColor: groupColor,
  //   }).then();
  // }

  // alertData() {
  //   const groupColor = (this.user.group === 'A') ? '#5c881a' : '#A4BA08';
  //   return Swal.fire({
  //     html:
  //       '<mat-icon><span class="material-icons-outlined" style="font-size: 126px; color: #ff3921; margin-bottom: 10px;">error_outline</span></mat-icon>' +
  //       '<h4 style="color: #707070;font-weight: bold;margin: auto;" class="col-8">Data final não pode ser menor que a inicial</h4>',
  //     allowOutsideClick: false,
  //     width: 500,
  //     confirmButtonText: "FECHAR",
  //     confirmButtonColor: groupColor,
  //   }).then();
  // }

  // //======Alert sefie area======  
  // alertWarningSelfie() {
  //   return Swal.fire({
  //     html: '<div class="row">' + '<div class="col-12 mx auto mx auto">' +
  //       '<img src="assets/images/tick.svg">' + '</div>' + '</div>' +
  //       '<div class="row m-0 mt-3 mb-3">' + '<div class="col-12">' + '<br /><h3 style="font-weight: bolder; color: var(----neo-dark-gray)">NÃO CONSEGUIMOS CONFIRMAR SUA IDENTIDADE!</h3>' + '</div>' +
  //       '<div class="col-md-4 col-12">' + '<img style="fill: var(--neo-light-green)" src="assets/images/oculos2.svg">' + '</div>' +
  //       '<div class="col-md-4 col-12">' + '<img style="fill: var(--neo-light-green)" src="assets/images/sol2.svg" >' + '</div>' +
  //       '<div class="col-md-4 col-12">' + ' <img style="fill: var(--neo-light-green)" src="assets/images/rosto_livre2.svg">' + '</div>'
  //       + '</div>',
  //     allowOutsideClick: false,
  //     showConfirmButton: true,
  //     confirmButtonText: "TENTAR NOVAMENTE",
  //     confirmButtonColor: "#658d1b",
  //     width: 850
  //   });
  // }

  // alertTrocaTitularidade(msg: string) {
  //   const groupColor = (this.user.group === 'A') ? '#5c881a' : '#A4BA08';
  //   return Swal.fire({
  //     html: '<div class="row">' + '<div class="col-12 mx auto mx auto">' +
  //       '<img src="assets/images/tick.svg">' + '</div>' + '</div>' +
  //       '<div class="row m-0 mt-3 mb-3">' + '<div class="col-12">' + '<br /><h3 style="font-weight: bolder; color: var(----neo-dark-gray)">' + msg + '</h3>',
  //     allowOutsideClick: false,
  //     showConfirmButton: true,
  //     confirmButtonText: "FECHAR",
  //     confirmButtonColor: groupColor,
  //     width: 850
  //   });
  // }

  // alertNaoReconheceDividaTroca() {
  //   const groupColor = (this.user.group === 'A') ? '#5c881a' : '#A4BA08';
  //   return Swal.fire({
  //     html: '<div class="row">' + '<div class="col-12 mx auto mx auto">' +
  //       '<img src="assets/images/tick.svg">' + '</div>' + '</div>' +
  //       '<div class="row m-0 mt-3 mb-3">' + '<div class="col-12">' + '<br /><h3 style="font-weight: bolder; color: var(----neo-dark-gray)">' + 'Para realizar a Troca de Titularidade é necessário realizar o pagamento das faturas em aberto' + '</h3>',
  //     allowOutsideClick: false,
  //     cancelButtonText: "DESEJO PAGAR",
  //     confirmButtonText: "CANCELAR SOLICITAÇÃO",
  //     confirmButtonColor: '#707070',
  //     cancelButtonColor: groupColor,
  //     showCancelButton: true,
  //     width: 850
  //   });
  // }

  
  // alertTarifaBranca() {
  //   return Swal.fire(
  //     {
  //       html: '<div align="justify" style="font-size:14px; padding:5px;"><h3 style="text-align: center; font-weight: 500; color: black;">Tem certeza que deseja optar pela tarifa branca?</h3><p style="font-size: 21px; color: #b1adad; font-weight: 400; text-align: center;">Estou ciente que ao optar pela tarifa branca o meu imóvel terá preços diferenciados para os segmentos de ponta, fora de ponta e intermediário, sendo que a configuração de consumo nestes postos horários pode afetar o valor da fatura de energia elétrica.</p></div>',

  //       showCancelButton: true,
  //       confirmButtonText: 'NÃO ACEITO',
  //       confirmButtonColor: '#d33',
  //       showConfirmButton: true,
  //       cancelButtonText: 'ACEITO',
  //       cancelButtonColor: '#658D1B',
  //       allowOutsideClick: false,
  //       width: 850,

  //     });
  // }
  
}
