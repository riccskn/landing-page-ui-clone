import React, {useEffect, useState} from "react";
import {Container, Product, ProductsContainer, TextDescription, TextPhrase, TextsContainer} from "./styles";
import SectionTitle from "../SectionTitle";
import ProductCard from "../ProductCard";
import {ProductService} from "../../services/ProductService";

export default function ProductArea() {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        const service = new ProductService()

        service.getAll()
            .then(res => {
                setProducts(res.data)
            })

         })

    return (
        <Product>
            <Container>
                <SectionTitle title={"PRODUCT"}/>

                <TextsContainer>
                    <TextPhrase>Choose your<br/>product themes.</TextPhrase>
                    <TextDescription>Find the theme you want. If our choice of theme is<br/>not what you want, you can customize it as you<br/>want.</TextDescription>
                </TextsContainer>

                <ProductsContainer>
                    {products && products.map((product, index) => {
                        const number = (index + 1).toString().padStart(2, '0');
                        return (
                            <ProductCard number={number} title={product.name} description={product.description} />
                        );
                    })}
                </ProductsContainer>

            </Container>
        </Product>
    )
}