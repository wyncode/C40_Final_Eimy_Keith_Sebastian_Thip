import React from 'react';
import axios from 'axios';
import GoogleMapReact from 'google-map-react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <>
      <section className="container2">
        <div className="HeaderHeading">
          <h1 className="HomeHeader">Let us guide you home</h1>
          <h3 className="HomeSubHeader">
            A place where community matters, and sweet memories are made with
            care and love the moment you walk through the door.
          </h3>
        </div>
      </section>
      {/* <div className="container position-relative mt-n6 z-index-20">
        <ul className="nav nav-tabs search-bar-nav-tabs" role="tablist">
          <li className="nav-item mr-2"><a className="nav-link active" href="#buy" data-toggle="tab" role="tab" aria-selected="true">Buy</a></li>
          <li className="nav-item mr-2"><a className="nav-link" href="#rent" data-toggle="tab" role="tab" aria-selected="false">Rent</a></li>
          <li className="nav-item"><a className="nav-link" href="#sell" data-toggle="tab" role="tab" aria-selected="false">Sell</a></li>
        </ul>
        <div className="search-bar search-bar-with-tabs p-3 p-lg-4">
          <div className="tab-content">
            <div className="tab-pane fade active show" id="buy" role="tabpanel">
              <form action="#">
                <div className="row">
                  <div className="col-lg-4 d-flex align-items-center form-group no-divider">
                    <div className="dropdown show-tick form-control"><select className="selectpicker form-control" title="Location" data-style="btn-form-control" multiple="" data-selected-text-format="count > 2">

                    </select><button type="button" tabindex="-1" className="btn dropdown-toggle btn-form-control bs-placeholder" data-toggle="dropdown" role="combobox" aria-owns="bs-select-1" aria-haspopup="listbox" aria-expanded="false" title="Location"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">Location</div></div> </div></button><div className="dropdown-menu "><div className="inner show" role="listbox" id="bs-select-1" tabindex="-1" aria-multiselectable="true"><ul className="dropdown-menu inner show" role="presentation"></ul></div></div></div>
                  </div>
                  <div className="col-md-6 col-lg-3 d-flex align-items-center form-group no-divider">
                    <div className="dropdown show-tick"><button type="button" tabindex="-1" className="btn dropdown-toggle btn-form-control bs-placeholder" data-toggle="dropdown" role="combobox" aria-owns="bs-select-2" aria-haspopup="listbox" aria-expanded="false" title="Type"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">Type</div></div> </div></button><div className="dropdown-menu "><div className="inner show" role="listbox" id="bs-select-2" tabindex="-1" aria-multiselectable="true"><ul className="dropdown-menu inner show" role="presentation"></ul></div></div></div>
                  </div>
                  <div className="col-md-6 col-lg-3 d-flex align-items-center form-group no-divider">
                    <div className="dropdown"><button type="button" tabindex="-1" className="btn dropdown-toggle btn-form-control bs-placeholder" data-toggle="dropdown" role="combobox" aria-owns="bs-select-3" aria-haspopup="listbox" aria-expanded="false" title="Max price"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">Max price</div></div> </div></button><div className="dropdown-menu "><div className="inner show" role="listbox" id="bs-select-3" tabindex="-1"><ul className="dropdown-menu inner show" role="presentation"></ul></div></div></div>
                  </div>
                  <div className="col-lg-2 form-group mb-0">
                    <button className="btn btn-primary btn-block h-100" type="submit">Search </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="tab-pane fade" id="rent" role="tabpanel">
              <form action="#">
                <div className="row">

                  <div className="col-lg-2 form-group mb-0">
                    <button className="btn btn-primary btn-block h-100" type="submit">Search </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="tab-pane fade" id="sell" role="tabpanel">
              <form action="#">
                <div className="row">

                  <div className="col-lg-2 form-group mb-0">
                    <button className="btn btn-primary btn-block h-100" type="submit">Search </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div> */}
      <div className="HeaderSearchTab">
        <ul className="nav nav-tabs search-bar-nav-tabs" role="tablist">
          <li className="nav-item diff">
            <a
              className="nav-link active"
              href="#buy"
              data-toggle="tab"
              role="tab"
              aria-selected="true"
            >
              Buy
            </a>
          </li>
          <li className="nav-item diff">
            <a
              className="nav-link"
              href="#rent"
              data-toggle="tab"
              role="tab"
              aria-selected="false"
            >
              Rent
            </a>
          </li>
          <li className="nav-item diff">
            <a
              className="nav-link"
              href="#Community"
              data-toggle="tab"
              role="tab"
              aria-selected="false"
            >
              Community
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#Manage"
              data-toggle="tab"
              role="tab"
              aria-selected="false"
            >
              Manage
            </a>
          </li>
        </ul>
        <div className="search-bar search-bar-with-tabs">
          <div className="tab-content">
            <div className="tab-pane fade active show" role="tabpanel">
              <input className="FirstSearchBar"></input>
              <button className="FirstSearchBarSearchButton" type="Search">
                <FontAwesomeIcon
                  className="SearchIcon"
                  icon={faSearch}
                  size="4x"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
