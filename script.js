$(document).ready(function(){
    $('.nama_mhs').click(function(){
        let isi = $(this).text();

        let isi2 = prompt('Ubah dengan:', isi);
        if(!isi2) return;

        $(this).text(isi2);
    });

    $('.hapus').click(function(){
        let yakin = confirm('yakin nih hapus?');
        if(!yakin) return;
        
        let id = $(this).prop('id');
        let rid = id .split('__');
        let baris_ke = rid[1];

        $('#row__'+baris_ke).slideUp();
    });

    $('.alamat').click(function (event) {
        alert("Anda mengklik kolom yang berisi kata " + $(this).html() + "!");
    });

    $("th").click(function (event) {
        alert("Anda mengklik kolom judul yang berisi kata " + $(this).html() + "!");
    });
});