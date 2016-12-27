import { Component } from '@angular/core';

@Component({
    selector: 'neo-menu-bar-cmp',
    template: `
    <nav role="navigation" class="navbar bg-dark-primary-color">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header bg-dark-primary-color">
          <button type="button" data-target="#navbarCollapse" data-toggle="collapse" class="navbar-toggle" data-target="#navbarCollapse" aria-expanded="false">
                      <span class="sr-only">Navigation mobile</span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                  </button>
          <a href="#/" class="navbar-brand link-color">Know your JSKills</a>
        </div>

        <!-- Collection of nav links, forms, and other content for toggling -->
        <div id="navbarCollapse" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <!-- <li ng-show="$root.user">
                          <a ui-sref="app.clients.list" class="link-color">
                              <i class="fa fa-users mr5"></i> Clients
                          </a>
                      </li>
                      <li ng-show="$root.user">
                          <a ui-sref="app.locations.list" class="link-color">
                              <i class="fa fa-exchange mr5"></i> Locations
                          </a>
                      </li>
                      <li ng-show="$root.user">
                          <a ui-sref="app.park.list" class="link-color">
                              <i class="fa fa-car mr5"></i> Parc
                          </a>
                      </li> -->
          </ul>
          <!--<ul class="nav navbar-nav navbar-right">-->
          <!--<li ng-show="$root.user">-->
          <!-- <signout-cmp></signout-cmp> -->
          <!--</li>-->
          <!--</ul>-->
        </div>
      </div>
    </nav>
    `
})
export class NeoMenuBarComponent { }
