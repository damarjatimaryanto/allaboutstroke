<?php
error_reporting(0);
$conn = mysqli_connect('localhost', 'afanalfi_ppmo', '2_dF&CjN]0;u', 'afanalfi_ppmo');
$json = file_get_contents('php://input');
$obj = json_decode($json, true);

$op = $_GET['op'];
switch ($op) {
    case 'login':
        login();
        break;
    case 'register':
        register();
        break;
    case 'insAlarm':
        insAlarm();
        break;
    case 'insAlarmLanjutan':
        insAlarmLanjutan();
        break;
    case 'insAlarmExtend':
        insAlarmExtend();
        break;
    case 'getData':
        getData();
        break;
    case 'getKategori':
        getKategori();
        break;
    case 'getFase':
        getFase();
        break;
    case 'getFaseDetail':
        getFaseDetail();
        break;
    case 'getAlarm':
        getAlarm();
        break;
    case 'getAlarmLanjutan':
        getAlarmLanjutan();
        break;
    case 'getObat':
        getObat();
        break;
    case 'submitAlarm':
        submitAlarm();
        break;
    case 'getHari':
        getHari();
        break;
    case 'getHariAlarm':
        getHariAlarm();
        break;
    case 'getToday':
        getToday();
        break;
    case 'getRiwayat':
        getRiwayat();
        break;
    case 'selectDate':
        selectDate();
        break;
    case 'getPresentase':
        getPresentase();
        break;
    case 'getUser':
        getUser();
        break;
}

function login()
{
    global $conn;
    global $json;
    global $obj;

    $username = $obj['username'];
    $password = md5($obj['password']);

    $sql = mysqli_query($conn, "SELECT * FROM user 
    JOIN fase_detail ON user.id_fase_detail = fase_detail.id_fase_detail
    WHERE username = '$username' AND password = '$password'");
    $row = mysqli_fetch_array($sql);

    if ($row > 1) {
        $result[] = array(
            'id_user' => $row['id_user'],
            'id_fase_detail' => $row['id_fase_detail'],
            'nama' => $row['nama'],
            'username' => $row['username'],
            'fase' => $row['fase'],
        );
    } else {
        $result = '0';
    }

    echo json_encode($result);

}

function register()
{
    global $conn;
    global $json;
    global $obj;

    $nama = $obj['nama'];
    $fase = '4';
    $username = $obj['username'];
    $password = md5($obj['password']);

    $sql = mysqli_query($conn, "INSERT INTO user 
    (id_fase_detail, username, password, nama) 
    VALUES ('$fase','$username','$password','$nama')");

    if ($sql) {
        $result = '1';
    } else {
        $result = '0';
    }

    echo json_encode($result);
}

function insAlarm()
{
    global $conn;
    global $json;
    global $obj;

    $id = $obj['id'];
    $jam = $obj['jam'];
    $hari = $obj['hari'];  
    $fase = $obj['fase'];  
    $start = $obj['start'];
    $end = $obj['end'];
    $hour = $obj['hour'];
    $minute = $obj['minute'];

    $sql = mysqli_query($conn, "INSERT INTO alarm(id_user, jam, hari,start,end,id_fase_detail, hour, minute) 
    VALUES('$id','$jam','$hari','$start','$end','$fase', '$hour', '$minute')");
    
    
    if ($sql) {
        $sql2 = mysqli_query($conn, "UPDATE user SET id_fase_detail = '1' WHERE id_user = '$id'");
        
        if ($sql2) {
            $result = '1';
        } else {
        $result = '0';
        }
    } else {
        $result = '0';
    }

    echo json_encode($result);
}

function insAlarmLanjutan()
{
    global $conn;
    global $json;
    global $obj;

    $id = $obj['id'];
    $jam = $obj['jam'];
      
    $fase = $obj['fase'];  
    $start = $obj['start'];
    $end = $obj['end']; 
    $hari = $obj['hari'];
    $hour = $obj['hour'];
    $minute = $obj['minute'];
    
    $hr = $obj['hr'];
    $length = count($hr);
    
    $sql = mysqli_query($conn, "INSERT INTO alarm_lanjutan(id_user, jam, start, end, id_fase_detail, hari, hour, minute) 
    VALUES('$id','$jam','$start','$end','$fase', '$hari', '$hour', '$minute')");


    if ($sql) {
        $getId = mysqli_query($conn, "SELECT id_alarm_lanjutan FROM alarm_lanjutan WHERE id_user = '$id' ORDER BY id_alarm_lanjutan DESC");
        $resultId = mysqli_fetch_array($getId);
        $idAlarm = $resultId['id_alarm_lanjutan'];
        
        $sql2 = mysqli_query($conn, "UPDATE user SET id_fase_detail = '2' WHERE id_user = '$id'");
        
        for ($i = 0; $i < $length; $i++) {
             $sql3 = mysqli_query($conn, "INSERT INTO lanjutan_detail (id_alarm_lanjutan, hari) 
                VALUES ('$idAlarm', '$hr[$i]')");
               
        }   
        
        if ($sql2 && $sql3) {
            $result = '1';
        } else {
            $result = '0';
        }
    } else {
        $result = '0';
    }

    echo json_encode($result);
}
function insAlarmExtend()
{
    global $conn;
    global $json;
    global $obj;

    $id = $obj['id'];
    $jam = $obj['jam'];
    $hari = $obj['hari'];
    $hari_satu = $obj['hari_satu'];  
    $hari_dua = $obj['hari_dua'];  
    $hari_tiga = $obj['hari_tiga'];  
    $fase = $obj['fase'];  
    $start = $obj['start'];
    $end = $obj['end'];
    $lama_pengobatan = $obj['lama_pengobatan'];
    $hour = $obj['hour'];
    $minute = $obj['minute'];

    $sql = mysqli_query($conn, "INSERT INTO alarm_extend(id_user, jam, hari_satu, hari_dua, hari_tiga, start, end, id_fase_detail, lama_pengobatan, hari, hour, minute) 
    VALUES('$id','$jam','$hari_satu','$hari_dua','$hari_tiga','$start','$end','$fase', '$lama_pengobatan', '$hari', '$hour', '$minute')");

    if ($sql) {
        $sql2 = mysqli_query($conn, "UPDATE user SET id_fase_detail = '3' WHERE id_user = '$id'");
        
        if ($sql2) {
            $result = '1';
        } else {
            $result = '0';
        }
    } else {
        $result = '0';
    }

    echo json_encode($result);
}


function getData()
{
    global $conn;
    global $json;
    global $obj;

    $id = $obj['id'];

    $sql = mysqli_query($conn, "SELECT * FROM riwayat
    JOIN status_detail ON riwayat.id_status_detail = status_detail.id_status_detail
    WHERE id_user = '$id'");

    while ($row = mysqli_fetch_array($sql)) {
        $result[] = array(
            'status' => $row['status'],
            'hari' => $row['hari'],
            'tgl' => $row['tgl'],
        );
    }
    ;

    echo json_encode($result);
}

function getKategori()
{
    global $conn;
    global $json;
    global $obj;

    $sql = mysqli_query($conn, "SELECT * FROM kategori_detail ORDER BY kategori ASC");

    while ($row = mysqli_fetch_array($sql)) {
        $result[] = array(
            'id_kategori_detail' => $row['id_kategori_detail'],
            'kategori' => $row['kategori'],
        );
    }
    ;

    echo json_encode($result);
}
function getFase()
{
    global $conn;
    global $json;
    global $obj;

    $sql = mysqli_query($conn, "SELECT * FROM fase_detail WHERE id_fase_detail BETWEEN '1' AND '3'");

    while ($row = mysqli_fetch_array($sql)) {
        $result[] = array(
            'id_fase_detail' => $row['id_fase_detail'],
            'fase' => $row['fase'],
            'lama_pengobatan' => $row['lama_pengobatan'],
        );
    }
    ;

    echo json_encode($result);
}

function getFaseDetail()
{
    global $conn;
    global $json;
    global $obj;
    
    $id = $obj['id'];
    $sql = mysqli_query($conn, "SELECT * FROM fase_detail WHERE id_fase_detail = '$id' ORDER BY fase ASC");

    while ($row = mysqli_fetch_array($sql)) {
        $result[] = array(
            'id_fase_detail' => $row['id_fase_detail'],
            'fase' => $row['fase'],
            'lama_pengobatan' => $row['lama_pengobatan'],
        );
    }
    ;

    echo json_encode($result);
}

function getAlarmLanjutan() {
    global $conn;
    global $json;
    global $obj;

    $id = $obj['id'];
    
    $sql = mysqli_query($conn, "SELECT * FROM alarm_lanjutan
    JOIN lanjutan_detail ON alarm_lanjutan.id_alarm_lanjutan = lanjutan_detail.id_alarm_lanjutan
    WHERE id_user = '$id'
    ORDER BY alarm_lanjutan.id_alarm_lanjutan DESC");
    
    while ($row = mysqli_fetch_array($sql)) {
        $result[] = array(
            'id_alarm' => $row['id_alarm_lanjutan'],
            'hari' => $row['hari'],
        );
    };
    
    
    echo json_encode($result);
}
function getAlarm()
{
    global $conn;
    global $json;
    global $obj;

    $id = $obj['id'];

    $sql = mysqli_query($conn, "SELECT * FROM alarm
    JOIN fase_detail ON alarm.id_fase_detail = fase_detail.id_fase_detail
    WHERE id_user = '$id'
    ORDER BY id_alarm DESC");

    $row = mysqli_fetch_array($sql);

    $sql2 = mysqli_query($conn, "SELECT * FROM alarm_lanjutan
    JOIN fase_detail ON alarm_lanjutan.id_fase_detail = fase_detail.id_fase_detail
    WHERE id_user = '$id'
    ORDER BY id_alarm_lanjutan DESC");

    $row2 = mysqli_fetch_array($sql2);
    
    $sql3 = mysqli_query($conn, "SELECT * FROM alarm_extend
    JOIN fase_detail ON alarm_extend.id_fase_detail = fase_detail.id_fase_detail
    WHERE id_user = '$id'
    ORDER BY id_alarm_extend DESC");

    $row3 = mysqli_fetch_array($sql3);
    
    if ($row > 0 && $row2 < 1 && $row3 < 1) {
        // insentif
        $result = array(
            'id_alarm' => $row['id_alarm'],
            'id_fase' => $row['id_fase_detail'],
            'id_user' => $row['id_user'],
            'jam' => $row['jam'],
            'fase' => $row['fase'],
            'hari' => $row['hari'],
            'start' => $row['start'],
            'end' => $row['end'],
            'fase' => $row['fase'],
            'hour' => $row['hour'],
            'minute' => $row['minute'],
        );
    } else if ($row < 1 && $row2 > 0 && $row3 < 1) {
        // lanjutan
        $result = array(
            'id_alarm' => $row2['id_alarm_lanjutan'],
            'id_user' => $row2['id_user'],
            'id_fase' => $row2['id_fase_detail'],
            'jam' => $row2['jam'],
            'hari_satu' => $row2['hari_satu'],
            'hari_dua' => $row2['hari_dua'],
            'hari_tiga' => $row2['hari_tiga'],
            'start' => $row2['start'],
            'end' => $row2['end'],
            'fase' => $row2['fase'],
            'hour' => $row2['hour'],
            'minute' => $row2['minute'],
        );
    } else if ($row > 0 && $row2 > 0 && $row3 < 1) {
        // lanjutan
        $result = array(
            'id_alarm' => $row2['id_alarm_lanjutan'],
            'id_user' => $row2['id_user'],
            'id_fase' => $row2['id_fase_detail'],
            'jam' => $row2['jam'],
            'hari_satu' => $row2['hari_satu'],
            'hari_dua' => $row2['hari_dua'],
            'hari_tiga' => $row2['hari_tiga'],
            'start' => $row2['start'],
            'end' => $row2['end'],
            'lama_pengobatan' => $row2['lama_pengobatan'],
            'fase' => $row2['fase'],
            'hour' => $row2['hour'],
            'minute' => $row2['minute'],
        );
    }  else if ($row < 1 && $row2 < 1 && $row3 > 0) {
        // extend
        $result = array(
            'id_alarm' => $row3['id_alarm_extend'],
            'id_user' => $row3['id_user'],
            'id_fase' => $row3['id_fase_detail'],
            'jam' => $row3['jam'],
            'hari_satu' => $row3['hari_satu'],
            'hari_dua' => $row3['hari_dua'],
            'hari_tiga' => $row3['hari_tiga'],
            'start' => $row3['start'],
            'end' => $row3['end'],
            'lama_pengobatan' => $row3['lama_pengobatan'],
            'fase' => $row3['fase'],
            'hour' => $row3['hour'],
            'minute' => $row3['minute'],
        );
    } else if ($row > 0 && $row2 > 0 && $row3 > 0) {
        // extend
        $result = array(
            'id_alarm' => $row3['id_alarm_extend'],
            'id_user' => $row3['id_user'],
            'id_fase' => $row3['id_fase_detail'],
            'jam' => $row3['jam'],
            'hari_satu' => $row3['hari_satu'],
            'hari_dua' => $row3['hari_dua'],
            'hari_tiga' => $row3['hari_tiga'],
            'start' => $row3['start'],
            'end' => $row3['end'],
            'lama_pengobatan' => $row3['lama_pengobatan'],
            'fase' => $row3['fase'],
            'hour' => $row3['hour'],
            'minute' => $row3['minute'],
        );
    } else if ($row < 1 && $row2 > 0 && $row3 > 0) {
        // extend
        $result = array(
            'id_alarm' => $row3['id_alarm_extend'],
            'id_user' => $row3['id_user'],
            'id_fase' => $row3['id_fase_detail'],
            'jam' => $row3['jam'],
            'hari_satu' => $row3['hari_satu'],
            'hari_dua' => $row3['hari_dua'],
            'hari_tiga' => $row3['hari_tiga'],
            'start' => $row3['start'],
            'end' => $row3['end'],
            'lama_pengobatan' => $row3['lama_pengobatan'],
            'fase' => $row3['fase'],
            'hour' => $row3['hour'],
            'minute' => $row3['minute'],
        );
    } else {
        $result = '0';
    }
    echo json_encode($result);
}

function getObat()
{
    global $conn;
    global $json;
    global $obj;

    $fase = $obj['fase'];

    $sql = mysqli_query($conn, "SELECT * FROM obat_detail
                                JOIN fase_detail ON obat_detail.id_fase_detail = fase_detail.id_fase_detail
                                JOIN jenis_obat_detail ON obat_detail.id_jenis_obat_detail = jenis_obat_detail.id_jenis_obat_detail
                                WHERE obat_detail.id_fase_detail = '$fase'
                        ");

    while ($row = mysqli_fetch_array($sql)) {
        $result[] = array(
            'id_obat_detail' => $row['id_obat_detail'],
            'id_jenis_obat_detail' => $row['id_jenis_obat_detail'],
            'id_fase_detail' => $row['id_fase_detail'],
            'obat' => $row['obat'],
            'fase' => $row['fase'],
            'jenis_obat' => $row['jenis_obat'],
            'waktu_minum' => $row['waktu_minum'],
        );
    };
    echo json_encode($result);
}

function submitAlarm() {
    global $conn;
    global $json;
    global $obj;

    $id = $obj['id'];
    $hari= $obj['hari'];
    $tgl = $obj['tgl'];
    $fase = $obj['fase'];
    
    $sql = mysqli_query($conn, "INSERT INTO riwayat (id_user, hari, tgl, id_fase_detail) 
    VALUES ('$id','$hari','$tgl', '$fase')");
    
    if ($sql) {
        echo json_encode('1');
    } else {
        echo json_encode('0');
    }
    
}

function getHari() {
    global $conn;
    global $json;
    global $obj;
    
    $id = $obj['id'];
    $fase = $obj['fase'];
      
    $sql = mysqli_query($conn, "SELECT MAX(hari) as hari FROM riwayat 
    WHERE id_user = '$id' && id_fase_detail = '$fase'
    ORDER BY hari ASC");

    $row = mysqli_fetch_array($sql);

    $hari = $row['hari'];

    if ($hari == null) {
        if ($fase == '1') {
            $sql2 = mysqli_query($conn, "SELECT * FROM alarm 
            WHERE id_user = '$id'");
            
            $row2 = mysqli_fetch_array($sql2);
            
            $result = array(
                'msg' => 'alarm',
                'hari' => $row2['hari'],
                'id_fase' => $fase,
                'id_user' => $id,
            );
        } else if ($fase == '2') {
            $sql3 = mysqli_query($conn, "SELECT * FROM alarm_lanjutan 
            WHERE id_user = '$id'");
            
            $row3 = mysqli_fetch_array($sql3);
            
            $result = array(
                'msg' => 'alarm',
                'hari' => $row3['hari'],
                'id_fase' => $fase,
                'id_user' => $id,
            );
        } else {
            $sql4 = mysqli_query($conn, "SELECT * FROM alarm_extend 
            WHERE id_user = '$id'");
            
            $row4 = mysqli_fetch_array($sql4);
            
            $result = array(
                'msg' => 'alarm',
                'hari' => $row4['hari'],
                'id_fase' => $fase,
                'id_user' => $id,
            );
        }
    } else {
        $result = array(
            'msg' => 'riwayat',
            'hari' => $hari
        );
    }
    
    echo json_encode($result);
}
function getHariAlarm() {
    global $conn;
    global $json;
    global $obj;
    
    $id = $obj['id'];
       
    $sql = mysqli_query($conn, "SELECT * FROM alarm 
    WHERE id_user = '$id'");
    
    $row = mysqli_fetch_array($sql);
    
    $result = array(    
        'hari' => $row['hari']
    );
    
    echo json_encode($result);
}

function getToday() {
    global $conn;
    global $json;
    global $obj;
    
    $id = $obj['id'];
       
    $sql = mysqli_query($conn, "SELECT * FROM riwayat 
    WHERE id_user = '$id' AND tgl = DATE(NOW())");

    $row = mysqli_fetch_array($sql);
    
    if ($row > 0) {
        $result = array(
            'id_riwayat' => $row['id_riwayat'],    
            'id_user' => $row['id_user'], 
            'id_status_detail' => $row['id_status_detail'], 
            'hari' => $row['hari'], 
            'tgl' => $row['tgl'], 
        );
    } else {
        $result = 'null';
    }
    
    echo json_encode($result);
}

function getRiwayat() {
    global $conn;
    global $json;
    global $obj;
    
    $id = $obj['id'];
       
    $sql = mysqli_query($conn, "SELECT * FROM riwayat 
    WHERE id_user = '$id' ORDER BY tgl ASC");

    while ($row = mysqli_fetch_array($sql)) {
        $result[] = array(
            'id_riwayat' => $row['id_riwayat'],    
            'id_user' => $row['id_user'], 
            'id_fase_detail' => $row['id_fase_detail'], 
            'hari' => $row['hari'], 
            'tgl' => $row['tgl'], 
        );
    }
    
    $data = $result;
    echo json_encode($data);
}

function selectDate() {
    global $conn;
    global $json;
    global $obj;
    
    $id = $obj['id'];
    $tgl = $obj['tgl'];
       
    $sql = mysqli_query($conn, "SELECT * FROM riwayat 
    JOIN user ON riwayat.id_user = user.id_user
    JOIN fase_detail ON riwayat.id_fase_detail = fase_detail.id_fase_detail
    WHERE riwayat.id_user = '$id' AND tgl = '$tgl'");

    $row = mysqli_fetch_array($sql);
    
    if ($row > 0) {
        $result = array(
            'id_riwayat' => $row['id_riwayat'],    
            'id_user' => $row['id_user'], 
            'id_status_detail' => $row['id_status_detail'], 
            'hari' => $row['hari'], 
            'tgl' => $row['tgl'], 
            'fase' => $row['fase'], 
            'kategori' => $row['kategori'], 
        );
    } else {
        $result = 'null';
    }
    
    echo json_encode($result);
}

function getPresentase() {
    global $conn;
    global $json;
    global $obj;
    
    $id = $obj['id'];
    
    $qInsentif = mysqli_query($conn, "SELECT COUNT(*) as total FROM riwayat 
                                WHERE id_user = '$id' AND id_fase_detail = '1'");
    
    $qLanjutan = mysqli_query($conn, "SELECT COUNT(*) as total FROM riwayat 
                                WHERE id_user = '$id' AND id_fase_detail = '2'");
                                
    $qExtend = mysqli_query($conn, "SELECT COUNT(*) as total FROM riwayat 
                                WHERE id_user = '$id' AND id_fase_detail = '3'");
                                
    $lExtend = mysqli_query($conn, "SELECT * FROM alarm_extend 
                                WHERE id_user = '$id'");
    
    $gLExtend = mysqli_fetch_array($lExtend);
    
    
    // get hari ke
    $hInsentif = mysqli_query($conn, "SELECT * FROM alarm WHERE id_user = '$id'");
    $hLanjutan = mysqli_query($conn, "SELECT * FROM alarm_lanjutan WHERE id_user = '$id'");
    $hExtend = mysqli_query($conn, "SELECT * FROM alarm_extend WHERE id_user = '$id'");
    
    $fHInsentif = mysqli_fetch_array($hInsentif);
    $fHLanjutan = mysqli_fetch_array($hLanjutan);
    $fHExtend = mysqli_fetch_array($hExtend);
    
    $gInsentif = mysqli_fetch_array($qInsentif);
    $gLanjutan = mysqli_fetch_array($qLanjutan);
    $gExtend = mysqli_fetch_array($qExtend);
    
    $result = array(
        [
            'id' => '1',
            'total' => $gInsentif['total'],
            'hari' => $fHInsentif['hari'],
        ],
        [
            'id' => '2',
            'total' => $gLanjutan['total'],
            'hari' => $fHLanjutan['hari'],
        ],
        [
            'id' => '3',
            'total' => $gExtend['total'],
            'hari' => $fHExtend['hari'],
            'lama' => $gLExtend['lama_pengobatan'],
            
        ],
    );
    
    echo json_encode($result);
}

function getUser() {
    global $conn;
    global $json;
    global $obj;
    
    $id = $obj['id'];
    
    $sql = mysqli_query($conn, "SELECT * FROM user 
                        JOIN fase_detail ON user.id_fase_detail = fase_detail.id_fase_detail
                        WHERE id_user = '$id'
                        ");
                                
    $row = mysqli_fetch_array($sql);
    
    $result = array(
        'id_user' => $row['id_user'],
        'id_fase_detail' => $row['id_fase_detail'],
        'fase' => $row['fase'],
        'nama' => $row['nama'],
        'username' => $row['username'],
    );
    
    echo json_encode($result);
}
