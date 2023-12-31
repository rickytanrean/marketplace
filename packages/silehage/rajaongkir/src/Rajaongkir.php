<?php

namespace Silehage\Rajaongkir;

class Rajaongkir
{
  protected $api_key;
  protected $url_endpoint;
  protected $account_type = 'starter';

  public function setApiKey($apikey, $account_type)
  {
    $this->api_key = $apikey;
    $this->account_type = $account_type;

    $this->setAccountType();

  }
  
  public function setAccountType()
  {
    
    $this->url_endpoint = config('rajaongkir.api_url');

    if($this->account_type == 'pro') {
      $this->url_endpoint = config('rajaongkir.api_url_pro');
    } 
    if($this->account_type == 'basic') {
      $this->url_endpoint = config('rajaongkir.api_url_basic');
    }
    
  }

  public function province()
  {
    $result = $this->curlGet('/province');

    return $result;
  }

  public function city($provinceId)
  {

    $payload = ['province' => $provinceId];
 
    $result = $this->curlGet('/city?' . http_build_query($payload));

    return $result;
      
  }
  public function cityAll()
  {

    $result = $this->curlGet('/city');

    return $result;
      
  }
  public function subdistrict($cityId)
  {

    $payload = ['city' => $cityId];
 
    $result = $this->curlGet('/subdistrict?' . http_build_query($payload));

    return $result;
  }

  public function cost(Array $payload)
  {
     $result = $this->curlPost('/cost', $payload);

     return $result;

  }
  public function waybill(Array $payload)
  {
    $result = $this->curlPost('/waybill', $payload);

    return $result;
  }

  protected function curlGet($endpoint, $payload = [])
  {
    $url = rtrim($this->url_endpoint,'/').'/'.ltrim($endpoint,'/');

    if(count($payload) > 0) {
      $url = $url . '?' .http_build_query($payload);
    }

    $curl = curl_init();

    $header = [
      'key:'.$this->api_key
    ];

    curl_setopt_array($curl, array(
      CURLOPT_URL => $url,
      CURLOPT_RETURNTRANSFER => true,
      CURLOPT_ENCODING => "",
      CURLOPT_MAXREDIRS => 10,
      CURLOPT_TIMEOUT => 30,
      CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
      CURLOPT_CUSTOMREQUEST => "GET",
      CURLOPT_HTTPHEADER => $header,
    ));

    $response = curl_exec($curl);
    $error = curl_error($curl);
    $errno  = curl_errno($curl);

    curl_close($curl);

    if($errno){
      return json_encode([
          'success' => false,
          'message' => $error,
      ]);
    }

    $data = json_decode($response);

    if($data->rajaongkir->status->code == 200){

        return json_encode([
          'success' => true,
          'data' => $data->rajaongkir->results
        ]);

      } else {
        return json_encode([
          'success' => false,
          'message' => $data->status->description,
      ]);
    }
    
  }

  protected function curlPost($endpoint,$data)
  {
      $url = rtrim($this->url_endpoint,'/').'/'.ltrim($endpoint,'/');
      
      $header = [
        'content-type: application/x-www-form-urlencoded',
        'key:'.$this->api_key,
      ];
      $curl = curl_init();

      curl_setopt_array($curl, array(
        CURLOPT_URL => $url,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => "",
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 30,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "POST",
        CURLOPT_POSTFIELDS => http_build_query($data),
        CURLOPT_HTTPHEADER => $header,
      ));

      $response = curl_exec($curl);
      $error = curl_error($curl);
      $errno  = curl_errno($curl);
      curl_close($curl);

      if($errno){

          return json_encode([
              'success' => false,
              'message' => $error,
          ]);
          
      }else{
        
        $data = json_decode($response);

        if($data->rajaongkir->status->code == 200){

          if(isset($data->rajaongkir->results)) {
            $result = $data->rajaongkir->results;
          } else if(isset($data->rajaongkir->result)) {
            $result = $data->rajaongkir->result;
          } else {
            $result = [];
          }

          return json_encode([
            'success' => true,
            'data' => $result
          ]);

        } else {
          return json_encode([
            'success' => false,
            'message' => $data->rajaongkir->status->description,
        ]);
      }
    }
  }
}