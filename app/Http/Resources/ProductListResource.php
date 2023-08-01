<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductListResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        // return parent::toArray($request);

        $pricing = [
            'default_price' => $this->price,
            'discount_type' => 'PERCENT',
            'discount_amount' => 0,
            'is_discount' => false,
        ];

        if($this->productPromo) {

            $disc = $this->productPromo;

            $pricing['is_discount'] = true;
            $pricing['discount_type'] = $disc->discount_type;
            $pricing['discount_amount'] = $disc->discount_amount;
        }

        if($this->minPrice) {
            $pricing['default_price'] = $this->minPrice->price;
        }

        return [
            'id'      => $this->id,
            'title'   => $this->title,
            'slug'    => $this->slug,
            'sku'    => $this->sku,
            'description' =>  $this->description,
            'status'  =>  $this->status,
            'rating'  =>  $this->reviews_avg_rating ? (float) number_format($this->reviews_avg_rating, 1) : 0,
            'pricing' =>  $pricing,
            'category' => $this->category,
            'asset'  =>  $this->featuredImage,
            'category_id' => $this->category_id,
            'unit' => $this->unit,
          ];
    }

}
