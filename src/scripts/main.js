$(document).ready(function() {
    AOS.init();

    $('#SimuladoConsorcio').change(function() {
        let modalidade = $(this).val();
        let valorMinimo;
        let parcelasOptions;
        if (modalidade === 'Carro') {
        valorMinimo = 30000;
        parcelasOptions = [48, 60, 120, 130, 200];
        } else if (modalidade === 'Imobiliario') {
        valorMinimo = 180000;
        parcelasOptions = [120, 180, 360];
        } else if (modalidade === 'Motocicleta') {
        valorMinimo = 5000;
        parcelasOptions = [24, 48, 60];
        } else if (modalidade === 'Pesado') {
        valorMinimo = 100000;
        parcelasOptions = [120, 180, 360];
        } else if (modalidade === 'Servico') {
        valorMinimo = 5000;
        parcelasOptions = [24, 48, 60];
        }

        $('#valorMinimoPorModalidade').text('Valor mínimo: R$' + valorMinimo.toLocaleString('pt-BR'));

        let parcelasSelect = $('#quantidadeDeParcelas');
        parcelasSelect.empty();

        for (let i = 0; i < parcelasOptions.length; i++) {
        let option = $('<option>').text(parcelasOptions[i]);
        parcelasSelect.append(option);
        }
    });

    $('#simuladorForm').submit(function(event) {
        event.preventDefault();

        let valorEmprestimo = parseFloat($('#valorEmprestimo').maskMoney('unmasked')[0]);
        let quantidadeParcelas = parseInt($('#quantidadeDeParcelas').val());

      let valorTotalEmprestimo = valorEmprestimo + (valorEmprestimo * 0.12);
        let valorParcela = valorTotalEmprestimo / quantidadeParcelas;

        $('#quantidadeDeParcelasSelecionadas').text(quantidadeParcelas);
        $('#valorPorParcela').text(valorParcela.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
        $('#valorTotal').text(valorTotalEmprestimo.toLocaleString('pt-BR', { minimumFractionDigits: 2 }));
    });
    $('#valorEmprestimo').maskMoney({
        thousands: '.',
        decimal: ',',
        allowZero: true
    });

    $('#cpf').mask('000.000.000-00');
    $('#tel').mask('(00) 00000-0000');
    $('#cel').mask('(00) 00000-0000');
});
