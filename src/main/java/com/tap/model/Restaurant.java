package com.tap.model;

public class Restaurant {

    private int restaurantId;
    private String slug;
    private String name;
    private double rating;
    private String tags;
    private String deliveryTime;
    private String deliveryFee;
    private String imageUrl;

    public Restaurant() {
    }

    public Restaurant(String slug, String name, double rating,
                      String tags, String deliveryTime,
                      String deliveryFee, String imageUrl) {

        this.slug = slug;
        this.name = name;
        this.rating = rating;
        this.tags = tags;
        this.deliveryTime = deliveryTime;
        this.deliveryFee = deliveryFee;
        this.imageUrl = imageUrl;
    }

    public int getRestaurantId() {
        return restaurantId;
    }

    public void setRestaurantId(int restaurantId) {
        this.restaurantId = restaurantId;
    }

    public String getSlug() {
        return slug;
    }

    public void setSlug(String slug) {
        this.slug = slug;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getRating() {
        return rating;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }

    public String getTags() {
        return tags;
    }

    public void setTags(String tags) {
        this.tags = tags;
    }

    public String getDeliveryTime() {
        return deliveryTime;
    }

    public void setDeliveryTime(String deliveryTime) {
        this.deliveryTime = deliveryTime;
    }

    public String getDeliveryFee() {
        return deliveryFee;
    }

    public void setDeliveryFee(String deliveryFee) {
        this.deliveryFee = deliveryFee;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
}